package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.Client;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ClientService {

    ResponseEntity<?> addClient(Client client);

    public Optional<Client> getClientById(String clientId);

    public List<Client> getAllClients();
}
