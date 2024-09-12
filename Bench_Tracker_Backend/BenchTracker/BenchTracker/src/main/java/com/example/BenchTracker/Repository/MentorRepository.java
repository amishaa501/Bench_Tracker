package com.example.BenchTracker.Repository;

import com.example.BenchTracker.Modal.Mentor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRepository extends MongoRepository<Mentor,String > {
}
