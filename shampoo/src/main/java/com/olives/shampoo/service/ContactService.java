package com.olives.shampoo.service;

import com.olives.shampoo.model.Contact;
import com.olives.shampoo.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContactService {

    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    public Contact saveContact(Contact contact) {
        contact.setTimestamp(LocalDateTime.now());
        return repository.save(contact);
    }
}
