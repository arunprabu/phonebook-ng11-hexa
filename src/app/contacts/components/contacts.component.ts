import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[] = [];
  contactsSubscription: Subscription | any;

  constructor( private contactService: ContactService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    // when the comp comes into the view ngOnInit called
    // ideal place for us to send ajax req
    console.log('Inside ngOnInit');

    // 1. send the req to the service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[] ) => { // 2. get the resp from the service
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy(): void {
    // when the comp goes out of the view -- this will be called
    // ideal place for us to unsubscribe, remove data, stop interval, remove timeout
    console.log('Inside Destroy');
    this.contactsSubscription.unsubscribe();
    if(this.contactList && this.contactList.length > 0){
      this.contactList.length = 0;
    }
  }

}
