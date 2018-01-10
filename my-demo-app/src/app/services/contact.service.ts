import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  createContact(formData) //receiving value from add-contact-component.ts
  {
    console.log(formData);
    return this.http.post("https://jsonplaceholder.typicode.com/users", formData)
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });
  }
  getContacts() {

    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });
  }
  getContactById(id) {

    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });
  }
  update(id, updateContact) {
    return this.http.put("https://jsonplaceholder.typicode.com/users/" + id, updateContact)
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });

  }
  
  delete(id){
    return this.http.delete("https://jsonplaceholder.typicode.com/users/" + id)
    .map((response: Response) => {
      console.log(response.status);
      return response.status;
    });


  }

}
