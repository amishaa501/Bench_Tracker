package com.example.BenchTracker.Services;


import com.example.BenchTracker.Modal.Mentor;
import com.example.BenchTracker.Repository.MentorRepository;
import com.sun.net.httpserver.HttpServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class MentorServiceImplement implements MentorService {

    @Autowired
    private MentorRepository mentorRepository;
    @Override
    public ResponseEntity<?> addMentor(Mentor mentor) {
        return new ResponseEntity<>(mentorRepository.save(mentor), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Optional> getMentorById(String mentorId) {
        return new ResponseEntity<>(mentorRepository.findById(mentorId),HttpStatus.OK);
    }

    @Override
    public List<Mentor> findAllMentors(){
        return mentorRepository.findAll();
    }
}
