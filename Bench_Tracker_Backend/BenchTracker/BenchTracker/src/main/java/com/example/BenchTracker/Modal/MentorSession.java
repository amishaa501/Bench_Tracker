package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "mentoringSession_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MentorSession {

    @Id
    @Indexed(unique = true)
    @NonNull
    private String sessionId;

    @NonNull
    private Mentor mentor;

    @NonNull
    private Date sessionDate;

    @NonNull
    private Integer mentorRating;

    @NonNull
    private String mentorFeedback;


}
