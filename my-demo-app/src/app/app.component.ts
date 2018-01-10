import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent { 
  /*title = 'app';*/
    constructor(private title: Title){
         let currentTitle = this.title.getTitle();
        this.title.setTitle('Nisha my demo app');
    }
}


