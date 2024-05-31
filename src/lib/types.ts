export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  address: Address;
  company: Company;
}

export interface Address {
  city: string;
  street: string;
  zipcode: string;
  suite: string;
  geo: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
