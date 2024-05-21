export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emails: string[];
  address: ContactAddress[]
}

interface ContactAddress {
  country: string;
  city: string;
  zipCode: string;

  street1: string;
  street2: string;
}
