package com.example.BenchTracker.Modal;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("client_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Client {

    @Id
    @NonNull
    private String clientId;


    @NonNull
    private String clientName;
}
