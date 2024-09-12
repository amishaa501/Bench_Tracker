package com.example.BenchTracker.Controller;


import com.example.BenchTracker.Modal.Candidate;
import com.example.BenchTracker.Modal.Mentor;
import com.example.BenchTracker.Modal.MentorHead;
import com.example.BenchTracker.Services.MentorHeadService;
import com.example.BenchTracker.Services.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class MentorController {

    @Autowired
    private MentorService mentorService;


    @PostMapping("/addMentor")
    ResponseEntity<?> addMentor(@RequestBody Mentor mentor){
        return new ResponseEntity<>(mentorService.addMentor(mentor), HttpStatus.OK);
    }

    @GetMapping("/getMentorById/{mentorId}")
    ResponseEntity<?> getMentorById(@PathVariable String mentorId){
        return new ResponseEntity<>(mentorService.getMentorById((mentorId)),HttpStatus.OK);
    }

    @GetMapping("/getAllMentors")
    List<Mentor> getAllMentors(){
        return mentorService.findAllMentors();
    }
}
