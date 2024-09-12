package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.Client;
import com.example.BenchTracker.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClientServiceImplement implements ClientService {


    @Autowired
    private ClientRepository clientRepository;

    @Override
    public ResponseEntity<?> addClient(Client client){
        return new ResponseEntity<>(clientRepository.save(client), HttpStatus.OK);
    }

    @Override
    public Optional<Client> getClientById(String clientId) {
        return clientRepository.findById(clientId);
    }

}
