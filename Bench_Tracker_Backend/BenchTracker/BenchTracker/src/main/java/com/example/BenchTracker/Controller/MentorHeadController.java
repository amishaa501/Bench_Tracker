package com.example.BenchTracker.Controller;


import com.example.BenchTracker.Modal.Client;
import com.example.BenchTracker.Modal.MentorHead;
import com.example.BenchTracker.Services.MentorHeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MentorHeadController {


    @Autowired
    private MentorHeadService mentorHeadService;


    @PostMapping("/addMentorHead")
    ResponseEntity<?> addMentorHead(@RequestBody MentorHead mentorHead){
        return new ResponseEntity<>(mentorHeadService.addMentorHead(mentorHead), HttpStatus.OK);
    }

    @GetMapping("/getMentorHeadById/{mentorHeadId}")
    ResponseEntity<?> getMentorHeadById(@PathVariable String mentorHeadId){
        return new ResponseEntity<>(mentorHeadService.getMentorHeadById(mentorHeadId),HttpStatus.OK);
    }
}
