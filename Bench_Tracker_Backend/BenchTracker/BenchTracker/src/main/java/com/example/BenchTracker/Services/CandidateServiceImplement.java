package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.Candidate;
import com.example.BenchTracker.Repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateServiceImplement implements CandidateService{


    @Autowired
    private CandidateRepository candidateRepository;


    @Override
    public ResponseEntity<?> addCandidateDetails(Candidate candidate){
        return new ResponseEntity<>(candidateRepository.save(candidate), HttpStatus.OK);
    }


    @Override
    public Optional<Candidate> getCandidateById(Integer id){

        return candidateRepository.findById(id);
    }

    @Override
    public List<Candidate> findAllCandidates(){
        return candidateRepository.findAll();
    }


}
