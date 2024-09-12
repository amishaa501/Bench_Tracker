package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.BenchManager;
import com.example.BenchTracker.Repository.BenchManagerRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BenchManagerServiceImplement implements BenchManagerService{

    @Autowired
    private BenchManagerRepositroy benchManagerRepositroy;

    @Override
    public ResponseEntity<?> addBenchManager(BenchManager benchManager) {
        return new ResponseEntity<>(benchManagerRepositroy.save(benchManager), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getBenchManagerById(String benchManagerId) {
        return new ResponseEntity<>(benchManagerRepositroy.findById(benchManagerId),HttpStatus.OK);
    }
}
