package com.company.content_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.content_service.entity.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {

}
