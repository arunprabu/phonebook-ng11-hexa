import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated = false;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read the URL Param -- get the ID from it
    // Learn more about reading url params in angular -- 3 ways
    const contactId = this.route.snapshot.paramMap.get('id');
    console.log(contactId);

    this.contactService.getContactById(contactId)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  handleEditModal(): any {
    this.duplicateContactData = { ...this.contactData };
    this.isUpdated = false;
  }

  handleEditSubmit(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.isUpdated = true;
        }
      });

  }

}
