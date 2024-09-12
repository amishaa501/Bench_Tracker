package com.example.BenchTracker.Services;

import com.example.BenchTracker.Modal.MentorHead;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface MentorHeadService {


    ResponseEntity<?> addMentorHead(MentorHead mentorHead);

    public Optional<MentorHead> getMentorHeadById(String mentorHeadId);
}
