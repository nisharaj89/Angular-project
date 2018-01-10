import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

declare var jquery: any;   // not required
declare var $: any;   // not required

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id;
  contactData: any = {};//{} is an object
  editableContact: any = {};
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private contactservice: ContactService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['contactId'];
      console.log(this.id);
    })
  }

  ngOnInit() {

    this.contactservice.getContactById(this.id)
      .subscribe((contact: any) => {
        console.log(contact);
        //this.contactList= contact; 
        this.contactData = contact;
      }
      );
  }
  onEditModalOpen() {
    $("#editModal").modal({ show: true });
    this.editableContact.name = this.contactData.name;
    this.editableContact.phone = this.contactData.phone;
    this.editableContact.email = this.contactData.email;
  }

  onUpdate() {
    console.log(this.editableContact);
    this.contactservice.update(this.id, this.editableContact)
      .subscribe((contact: any) => {
        console.log(contact);
        //this.contactList= contact; 
        this.contactData = contact;
        // $("#editModal").modal("hide");
        //another method to hide
        this.closeBtn.nativeElement.click();
      }
      );

  }

  onDelete() {
    this.contactservice.delete(this.id)
      .subscribe((status: any) => {
        console.log(status);
        if (status == 200) {
          $("#deleteModal").modal("hide");
          this.router.navigate(["contacts"])
        } else {
          console.log(status);
        }


        //another method to hide
        //this.closeBtn.nativeElement.click();
      }
      );

  }


}
