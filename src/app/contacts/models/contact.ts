export interface IContact {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}

// ng g cl contacts/models/contact
export class Contact implements IContact {
  first_name = '';
  last_name = '';
  email = '';
  id = 0;

  // util methods go here
}
