package com.example.BenchTracker.Repository;

import com.example.BenchTracker.Modal.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends MongoRepository<Client,String> {
}
