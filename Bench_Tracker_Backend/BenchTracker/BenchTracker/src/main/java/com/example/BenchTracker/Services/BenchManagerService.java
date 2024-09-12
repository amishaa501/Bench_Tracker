package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.BenchManager;
import org.springframework.http.ResponseEntity;

import java.util.ResourceBundle;

public interface BenchManagerService {


    ResponseEntity<?> addBenchManager(BenchManager benchManager);

    ResponseEntity<?> getBenchManagerById(String benchManagerId);
}
