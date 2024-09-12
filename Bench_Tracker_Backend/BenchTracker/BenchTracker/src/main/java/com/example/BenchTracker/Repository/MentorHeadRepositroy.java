package com.example.BenchTracker.Repository;

import com.example.BenchTracker.Modal.Mentor;
import com.example.BenchTracker.Modal.MentorHead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorHeadRepositroy extends MongoRepository<MentorHead,String> {
}
