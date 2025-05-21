package com.company.content_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.content_service.entity.Content;
import com.company.content_service.repository.ContentRepository;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    @Autowired
    private ContentRepository contentRepository;

    @GetMapping("/all")
    public List<Content> getAllContent() {
        return contentRepository.findAll();
    }

    @PostMapping("/add")
    public Content addContent(@RequestBody Content content) {
        return contentRepository.save(content);
    }
}
