package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.Mentor;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface MentorService {

    ResponseEntity<?> addMentor(Mentor mentor);
    ResponseEntity<Optional> getMentorById(String mentorId);
    List<Mentor> findAllMentors();
}
