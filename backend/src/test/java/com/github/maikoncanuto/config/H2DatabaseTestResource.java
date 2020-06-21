package com.github.maikoncanuto.config;

import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;
import org.h2.tools.Server;

import java.sql.SQLException;
import java.util.Map;

public class H2DatabaseTestResource implements QuarkusTestResourceLifecycleManager {

    private Server tcpServer;

    @Override
    public Map<String, String> start() {
        try {
            tcpServer = Server.createTcpServer();
            tcpServer.start();
            System.out.println("[INFO] H2 database started in TCP server mode");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return null;
    }

    @Override
    public synchronized void stop() {
        if (tcpServer != null) {
            tcpServer.stop();
            System.out.println("[INFO] H2 database was shut down");
            tcpServer = null;
        }
    }
}
