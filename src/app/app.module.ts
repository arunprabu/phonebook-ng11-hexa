import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule in turn bootstrapped with a comp -- AppComponent
})
export class AppModule { }
