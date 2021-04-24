import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent, canActivate: [AuthGuard] },
      { path: ':id', component: ContactDetailsComponent }  // id is the URL Param
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
