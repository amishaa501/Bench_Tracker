package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.Candidate;
import com.example.BenchTracker.Modal.CandidateInterview;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface CandidateInterviewService {

    ResponseEntity<?> addInterviewDetails(CandidateInterview candidateInterview);
    public Optional<CandidateInterview> getInterviewById(String interviewId);


}
