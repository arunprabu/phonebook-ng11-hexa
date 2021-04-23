import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create form tag equivalent
  addContactForm: FormGroup | any;
  isSaved = false;

  constructor(private contactService: ContactService) { // 1. connect with the service using DI

  }

  ngOnInit(): void {
    // Step 1 continues..
    this.addContactForm = new FormGroup({
      // Step 2: create form field equivalents
      name: new FormControl('', Validators.required), // Step 5: work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
      // refer HTML for Step 3
    });

  }

  handleSubmit(): void {
    console.log(this.addContactForm.value);

    // 2. send the above data to the service
    this.contactService.createContact(this.addContactForm.value)
      .subscribe((res: any) => { // 3. get the resp from the service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
