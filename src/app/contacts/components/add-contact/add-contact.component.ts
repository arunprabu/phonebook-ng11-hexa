import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create form tag equivalent
  addContactForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    // Step 1 continues..
    this.addContactForm = new FormGroup({
      // Step 2: create form field equivalents
      name: new FormControl('', Validators.required), // Step 5: work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
      // refer HTML for Step 3
    });

  }

  handleSubmit(): void {
    console.log(this.addContactForm.value);
  }

}
