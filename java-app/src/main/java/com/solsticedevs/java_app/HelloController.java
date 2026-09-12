package com.solsticedevs.java_app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public Map<String, String> readRoot() {
        return Map.of("message", "Solstice Devs Java Service is running", "status", "ok");
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "healthy", "version", "1.0.0");
    }
}
