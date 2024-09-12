package com.example.BenchTracker.Controller;


import com.example.BenchTracker.Modal.BenchManager;
import com.example.BenchTracker.Services.BenchManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class BenchManagerController {


    @Autowired
    private BenchManagerService benchManagerService;


    @PostMapping("/addBenchManager")
    ResponseEntity<?> addBenchManager(@RequestBody BenchManager benchManager){
        return new ResponseEntity<>(benchManagerService.addBenchManager(benchManager), HttpStatus.OK);
    }

    @GetMapping("/getBenchManagerById/{benchManagerId}")
    ResponseEntity<?> getBenchManagerById(@PathVariable String benchManagerId){
        return new ResponseEntity<>(benchManagerService.getBenchManagerById(benchManagerId),HttpStatus.OK);
    }
}
