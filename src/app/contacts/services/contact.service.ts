import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

// decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // 1. get the data from the comp
  createContact( contactFormData: any): any{
    console.log(contactFormData);

    // 2. send the data to the REST API
    // 2.1. What's the REST API URL? https://reqres.in/api/users
    // 2.2. What's the Http Method? POST
    // 2.3. What's the REST API Client tool? HttpClient
    return this.http.post('https://reqres.in/api/users', contactFormData)
      .pipe(map((res: any) => { // 3. get the resp from the REST API
        console.log(res);
        return res; // 4. send the resp to the comp
      }));
  }

  // 1. get the req from the comp
  getContacts(): Observable<Contact[]>{
    console.log('Before getting contacts');
    // 2. send the req to the REST API
    // 2.1 What's the REST API URL? https://reqres.in/api/users
    // 2.2. Http Method? GET
    // 2.3. What's the REST API Client? HttpClient
    return this.http.get('https://reqres.in/api/users')
      .pipe(map( (res: any) => { // 3. get the res from the REST API
        console.log(res);
        // filter, removal, sort, adding, conversion
        return res.data; // 4. send the res to the comp
      }));
  }

  getContactById(contactId: any): any{
    console.log(contactId);
    return this.http.get(`https://reqres.in/api/users/${contactId}`)
      .pipe(map( (res: any) => {
        console.log(res);
        return res.data;
      }));
  }

  updateContact(contactData: any): any {
    console.log(contactData);

    const UPDATE_API_URL = `https://reqres.in/api/users/${contactData.id}`;

    return this.http.put(UPDATE_API_URL, contactData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

}
