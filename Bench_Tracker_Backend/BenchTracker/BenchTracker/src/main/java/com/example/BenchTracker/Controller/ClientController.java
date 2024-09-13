package com.example.BenchTracker.Controller;


import com.example.BenchTracker.Modal.Client;
import com.example.BenchTracker.Services.ClientService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;


    @PostMapping("/addClient")
    ResponseEntity<?> addClient(@RequestBody Client client){
        return  new ResponseEntity<>(clientService.addClient(client), HttpStatus.OK);
    }

    @GetMapping("/getClientById/{clientId}")
    ResponseEntity<?> getClient(@PathVariable String clientId){
        return new ResponseEntity<>(clientService.getClientById(clientId),HttpStatus.OK);
    }

    @GetMapping("/getAllClients")
    List<Client> getAllClients(){
        return clientService.getAllClients();
    }
}
