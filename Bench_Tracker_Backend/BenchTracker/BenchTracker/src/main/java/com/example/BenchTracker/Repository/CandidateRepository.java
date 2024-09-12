package com.example.BenchTracker.Repository;


import com.example.BenchTracker.Modal.Candidate;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepository extends MongoRepository<Candidate, Integer> {
}
