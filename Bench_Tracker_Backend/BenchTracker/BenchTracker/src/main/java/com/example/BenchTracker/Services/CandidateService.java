package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.Candidate;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface CandidateService {


    ResponseEntity<?> addCandidateDetails(Candidate candidate);
    public Optional<Candidate> getCandidateById(Integer id);

    public List<Candidate> findAllCandidates();

}
