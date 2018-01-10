import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactService } from './services/contact.service';



const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent },
  { path :'add', component: AddContactComponent },
  { path :'contacts', component: ContactsComponent },
  { path :'contacts/:contactId', component: ContactDetailComponent } ///after colon is parameter
]


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactsComponent,
    ContactDetailComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
