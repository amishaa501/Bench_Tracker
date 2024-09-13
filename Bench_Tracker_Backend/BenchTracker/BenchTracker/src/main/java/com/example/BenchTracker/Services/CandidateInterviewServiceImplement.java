package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.Candidate;
import com.example.BenchTracker.Modal.CandidateInterview;
import com.example.BenchTracker.Repository.CandiateInterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CandidateInterviewServiceImplement implements CandidateInterviewService {


    @Autowired
    private CandiateInterviewRepository candiateInterviewRepository;

    @Override
    public ResponseEntity<?> addInterviewDetails(CandidateInterview candidateInterview) {
        return new ResponseEntity<>(candiateInterviewRepository.save(candidateInterview), HttpStatus.OK);
    }

    @Override
    public Optional<CandidateInterview> getInterviewById(String interviewId) {
        return candiateInterviewRepository.findById(interviewId);
    }
}
