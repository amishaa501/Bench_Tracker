package com.example.BenchTracker.Config;

import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.data.mongodb.core.mapping.MongoPersistentEntity;
import org.springframework.data.mongodb.core.mapping.MongoPersistentProperty;

@Configuration
public class MongoConfig {

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Bean
    public MongoDatabaseFactory mongoDbFactory() {
        return new SimpleMongoClientDatabaseFactory(mongoUri);
    }

    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoDbFactory(), mongoConverter());
    }

//    @Bean
//    public MappingMongoConverter mongoConverter() {
//        MongoMappingContext mappingContext = new MongoMappingContext();
//        MongoConverter converter = new MappingMongoConverter(mongoDbFactory(), mappingContext);
//        mappingContext.setSimpleTypeHolder(converter.getMappingContext().getSimpleTypeHolder());
//        return (MappingMongoConverter) converter;
//    }

    @Bean
    public MappingMongoConverter mongoConverter() {
        MongoMappingContext mappingContext = new MongoMappingContext();
        MongoConverter converter = new MappingMongoConverter(mongoDbFactory(), mappingContext);
        ((MappingMongoConverter) converter).setMapKeyDotReplacement("__"); // Add any additional configurations here
        return (MappingMongoConverter) converter;
    }





}
