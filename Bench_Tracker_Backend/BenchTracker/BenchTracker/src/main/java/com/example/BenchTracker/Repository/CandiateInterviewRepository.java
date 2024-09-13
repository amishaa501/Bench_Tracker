package com.example.BenchTracker.Repository;

import com.example.BenchTracker.Modal.CandidateInterview;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandiateInterviewRepository extends MongoRepository<CandidateInterview,String> {
}
