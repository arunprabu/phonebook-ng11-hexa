import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

// configure the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent, canActivate: [AuthGuard] },
  { path: 'contacts/:id', component: ContactDetailsComponent }, // id is the URL Param
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
