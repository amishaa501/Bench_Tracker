package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;


@Document("mentor_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Mentor {


    @Id
    @NonNull
    private String mentorId;

    @NonNull
    private String mentorName;

    @NonNull
    private Date dateOfJoining;

    @NonNull
    private Integer experienceInMonths;// convert to year, months in frontend

    @NonNull
    private List<String> skills;



}
