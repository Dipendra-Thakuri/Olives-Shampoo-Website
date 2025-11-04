package com.olives.shampoo.controller;

import com.olives.shampoo.model.Contact;
import com.olives.shampoo.service.ContactService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return service.saveContact(contact);
    }
}
