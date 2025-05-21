package com.company.contact_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.contact_service.entity.Contact;
import com.company.contact_service.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/all")
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }
}
