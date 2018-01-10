import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactList = []; // for added contacts

  constructor(private contactService : ContactService ) { }

  ngOnInit() {
  }
  onSubmit(myform){
    console.log(myform.value);// can see the value in console
    this.contactService.createContact(myform.value)
                      .subscribe( (contact: any) => {
                        console.log(contact); 
                        this.contactList.push(contact); 
                      }
                   );

  }
  
  

}
