package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("benchManager_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BenchManager {

    @Id
    @NonNull
    private String benchManagerId;

    @NonNull
    private String benchManagerName;

}
