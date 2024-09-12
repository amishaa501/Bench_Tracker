package com.example.BenchTracker.Controller;


import com.example.BenchTracker.Modal.Candidate;
import com.example.BenchTracker.Modal.Mentor;
import com.example.BenchTracker.Services.CandidateService;
import com.sun.net.httpserver.HttpsServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CandidateController {

   @Autowired
    private CandidateService candidateService;

   @PostMapping("/addCandidate")
    ResponseEntity<?> addCandidateDetails(@RequestBody Candidate candidate){
      return new ResponseEntity<>(candidateService.addCandidateDetails(candidate), HttpStatus.OK);
   }

   @GetMapping("/getCandidate/{id}")
    ResponseEntity<?> getCandidateById(@PathVariable Integer id){
       return new ResponseEntity<>(candidateService.getCandidateById(id),HttpStatus.OK);
   }

    @GetMapping("/getAllCandidates")
    List<Candidate> getAllCandidates(){
        return candidateService.findAllCandidates();
    }
}
