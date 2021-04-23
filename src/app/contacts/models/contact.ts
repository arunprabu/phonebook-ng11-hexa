export interface IContact {
  first_name: string;
  last_name: string;
  email: string;
}

// ng g cl contacts/models/contact
export class Contact implements IContact {
  first_name: string = '';
  last_name: string = '';
  email: string = '';

  // util methods go here
}
