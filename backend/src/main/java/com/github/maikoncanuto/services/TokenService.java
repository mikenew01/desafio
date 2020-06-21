package com.github.maikoncanuto.services;

import org.eclipse.microprofile.jwt.Claims;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.NumericDate;

import javax.enterprise.context.RequestScoped;
import java.io.InputStream;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.jose4j.jws.AlgorithmIdentifiers.RSA_USING_SHA256;

@RequestScoped
public class TokenService {

    private static final Integer EXPIRATION_TIME_MINUTES = 60;
    private static final String AUDIENCE_JWT = "using-jwt";
    private static final String ISSUER_JWT = "widen";
    private static final String PRIVATE_PEM = "/privateKey.pem";

    public String createToken(final String subject, final String role) {
        try {
            final JwtClaims jwtClaims = new JwtClaims();
            jwtClaims.setIssuer(ISSUER_JWT);
            jwtClaims.setJwtId(UUID.randomUUID().toString());
            jwtClaims.setSubject(subject);
            jwtClaims.setClaim(Claims.upn.name(), subject);
            jwtClaims.setClaim(Claims.groups.name(), List.of(role));
            jwtClaims.setAudience(AUDIENCE_JWT);
            jwtClaims.setExpirationTimeMinutesInTheFuture(EXPIRATION_TIME_MINUTES);

            return createTokenString(jwtClaims);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public String createTokenString(JwtClaims claims) throws Exception {
        final PrivateKey pk = readPrivateKey();
        return createTokenString(pk, claims);
    }

    private String createTokenString(final PrivateKey privateKey, final JwtClaims claims) throws Exception {
        long currentTimeInSecs = currentTimeInSecs();

        claims.setIssuedAt(NumericDate.fromSeconds(currentTimeInSecs));
        claims.setClaim(Claims.auth_time.name(), NumericDate.fromSeconds(currentTimeInSecs));

        for (Map.Entry<String, Object> entry : claims.getClaimsMap().entrySet()) {
            System.out.printf("\tAdded claim: %s, value: %s\n", entry.getKey(), entry.getValue());
        }

        final JsonWebSignature jws = new JsonWebSignature();
        jws.setPayload(claims.toJson());
        jws.setKey(privateKey);
        jws.setKeyIdHeaderValue(PRIVATE_PEM);
        jws.setHeader("typ", "JWT");
        jws.setAlgorithmHeaderValue(RSA_USING_SHA256);

        return jws.getCompactSerialization();
    }

    private PrivateKey readPrivateKey() throws Exception {
        final InputStream contentIS = TokenService.class.getResourceAsStream(PRIVATE_PEM);
        byte[] tmp = new byte[4096];
        int length = contentIS.read(tmp);
        return decodePrivateKey(new String(tmp, 0, length, UTF_8));
    }

    private PrivateKey decodePrivateKey(final String pemEncoded) throws Exception {
        final byte[] encodedBytes = toEncodedBytes(pemEncoded);

        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encodedBytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePrivate(keySpec);
    }

    private byte[] toEncodedBytes(final String pemEncoded) {
        final String normalizedPem = removeBeginEnd(pemEncoded);
        return Base64.getDecoder().decode(normalizedPem);
    }

    private String removeBeginEnd(String pem) {
        pem = pem.replaceAll("-----BEGIN (.*)-----", "");
        pem = pem.replaceAll("-----END (.*)----", "");
        pem = pem.replaceAll("\r\n", "");
        pem = pem.replaceAll("\n", "");
        return pem.trim();
    }

    private int currentTimeInSecs() {
        long currentTimeMS = System.currentTimeMillis();
        return (int) (currentTimeMS / 1000);
    }
}
