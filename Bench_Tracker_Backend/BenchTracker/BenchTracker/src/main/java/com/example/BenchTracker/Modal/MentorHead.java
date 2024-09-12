package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document("mentorHead_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MentorHead {



    @Id
    @NonNull
    private String mentorHeadId;

    @NonNull
    private String mentorName;
}
