package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.MentorHead;
import com.example.BenchTracker.Repository.MentorHeadRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorHeadServiceImplement implements MentorHeadService{

    @Autowired
    private MentorHeadRepositroy mentorHeadRepositroy;


    @Override
    public ResponseEntity<?> addMentorHead(MentorHead mentorHead) {
        return new ResponseEntity<>(mentorHeadRepositroy.save(mentorHead), HttpStatus.OK);
    }

    @Override
    public Optional<MentorHead> getMentorHeadById(String mentorHeadId) {
        return mentorHeadRepositroy.findById(mentorHeadId);
    }
}
