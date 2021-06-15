import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts: Contact[];
dataService: ContactsService;
  

  constructor(private contactService: ContactsService) {
    this.dataService = contactService;
   }
  
  ngOnInit() {
    this.contacts = this.dataService.contacts;
  }

}
