package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Document(collection = "candidate_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Candidate {


    //        @Id
//        private ObjectId loginId;
    @Id
    @NonNull
    private String empId;


    @NonNull
    private String name;

    @NonNull
    private List<String> skills;

    @NonNull
    private String processStatus;

    @NonNull
    private boolean isBlocked;

    @NonNull
    private String blockedBy;

    @NonNull
    private Date onboardingDate;

    @NonNull
    private Date benchStartDate;

    @NonNull
    private Integer aging;

    @NonNull
    private Map<String,String> interviewsScheduled;// maps date->clientId

    @NonNull
    private String client;

    @NonNull
    private Map<String,String> comment; // empId -> comment

    @NonNull
    private Integer mentorRating;

    @NonNull
    private Map<String,String> mentorFeedback; // mentorId -> feedback

    @NonNull
    private String Location;

    @NonNull
    private String ThLink;



}
