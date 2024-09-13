package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "candidateInterview_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CandidateInterview {


    @Id
    @Indexed(unique = true)
    @NonNull
    private String interviewId;

    @NonNull
    private String candidateName;

    @NonNull
    private Date interviewDate;

    @NonNull
    private String candidateId;

    @NonNull
    private String interviewerName;

    @NonNull
    private String interviewerId;

    @NonNull
    private Client client;

    @NonNull
    private String interviewFeedback; //candiate feedback extra
}
