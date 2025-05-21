package com.company.contact_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.contact_service.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
