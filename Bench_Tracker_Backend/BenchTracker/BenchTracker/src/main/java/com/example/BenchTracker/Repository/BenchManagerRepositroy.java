package com.example.BenchTracker.Repository;

import com.example.BenchTracker.Modal.BenchManager;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BenchManagerRepositroy extends MongoRepository<BenchManager,String> {
}
