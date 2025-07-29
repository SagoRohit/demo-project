package com.example.demo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PersonController {
    private final PersonRepository repo;
    public PersonController(PersonRepository repo) { this.repo = repo; }

    @GetMapping("/name/{id}")
    public String getName(@PathVariable Long id) {
        return repo.findById(id)
            .map(Person::getName)
            .orElse("Not found");
    }
}
