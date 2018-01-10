import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList = [];

  constructor(private contactservice : ContactService) { 
    console.log("Inside constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    this.contactservice.getContacts()
    .subscribe( (contact: any) => {
      console.log(contact); 
      this.contactList= contact; 
    }
 );
  }

}
