## Requisitos
* Instalação do Docker 19.03.8 (Podendo ser outras versões)
* Instalação do Docker Compose 1.25.5 (Podendo ser outras versões)
* Instalação do nodejs, npm.
* Instalação do angular/cli 9. 
* Instalação da [JDK/GraalVM 11](https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-20.1.0/graalvm-ce-java11-windows-amd64-20.1.0.zip) 

## Iniciando Backend 
* 1 - Executar o comando para subir o banco de dados:
``` cmd
docker-compose up -d

* Acompanhar logs: docker-compose logs -f
```

* 2 - Executar comando para gerar o package .jar
``` cmd
mvn clean package
```

* 3 - Executar comando para subir o backend:
``` cmd
java -jar backend/target/backend-1.0.0-SNAPSHOT-runner.jar ()
``` 

* 4 - Verificar endpoints: http://localhost:8080/swagger-ui

* 5 - Para registrar usuário: http://localhost:8080/api/v1/auth/register
``` json
{
	"login": "gabriela.santos",
	"password": "123456",
	"person": {
		"name": "Gabriela Santos",
		"document": "04900092112",
		"nameFather": "Carlos Silva",
		"nameMother": "Chayenne Ximenes",
		"typePerson": "PESSOA_FISICA"
	}
}
```
Retorno:
``` json
{
  "id": 2,
  "login": "gabriela.santos",
  "password": "7c4a8d09ca3762af61e59520943dc26494f8941b",
  "person": {
    "id": 2,
    "name": "Gabriela Santos",
    "document": "04900092112",
    "nameFather": "Carlos Silva",
    "nameMother": "Chayenne Ximenes",
    "typePerson": "PESSOA_FISICA",
    "dateBirth": null
  },
  "role": "OPERADOR"
}
```


* 6 - Para efetuar login: http://localhost:8080/api/v1/auth/login
``` json
{
	"login": "gabriela.santos",
	"password": "123456"
}
```
Retorno: 
``` json
{
  "code": 200,
  "mensage": "Login realizado com sucesso!",
  "token": "eyJraWQiOiIvcHJpdmF0ZUtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ3aWRlbiIsImp0aSI6ImVjMzI0MzE1LTcwMzgtNDcyNC1hYWMwLTc2OTU3NjY0NWZlNyIsInN1YiI6Im1rMiIsInVwbiI6Im1rMiIsImdyb3VwcyI6WyJPUEVSQURPUiJdLCJhdWQiOiJ1c2luZy1qd3QiLCJleHAiOjE1OTI3MDk0OTUsImlhdCI6MTU5MjcwNTg5NSwiYXV0aF90aW1lIjoiTnVtZXJpY0RhdGV7MTU5MjcwNTg5NSAtPiAyMCBkZSBqdW4gZGUgMjAyMCAyMzoxODoxNSBCUlR9In0.rnNAOuOo6TtMMm40oMOlSwE51x-ZNAIJ1v54-Q_NRHpn6SIsNeOX9nZ1hC1iIN8ls3evoQjbQrxm-7QHXjJJQzfZODFSQfoXaHov-JMn8WjDpyQjlbJ74GDovRJFESgdBgCg47BM_4nV8orJ9a99jTi5WpuMpwHMHznI8td3jwqvfhTqaBR2kem4QktpRo3COJYhDa7RnSutX6Qtx65aGBCX5VFlQnqs6ukpApyZ9ilOeHRtsH3Z2Emb23XbkWj8DfG4bwT3byBzJHYnmoijZRqI5Z4rxilBY-RSnmIWXh99kNPT97lqvnuZGy-4Bw1Kv8aI8d734vUxJhUpB-TZyQ"
}
```

## Iniciando frontend
* 1 - Executar o comando: 
```$xslt
cd frontend/
```

* 2 - Executar o comando:
```$xslt
npm install
```

* 3 - Executar o comando:
```$xslt
npm start
```

* 4 - Logar com usuário e senha: 
```$xslt
Usuário: admin
Senha: 123456
```

## Decisões técnicas
* A arquitetura do Quarkus foi escolhida pelo fato de prover maior facilidade no desenvolvimento contendo as especificações do JavaEE, JPA, CDI e etc. 

## Considerações

* Melhorias ainda precisam ser aplicadas para seguir exatamente as HU, porém devido ao tempo não foi possível finalizar.
