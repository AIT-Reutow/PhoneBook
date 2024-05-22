import {Injectable} from '@angular/core';
import {Contact} from "../models/contact";

const CONTACTS: Contact[] = [
  {
    id: 121,
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-789',
    emails: ['john.doe@example.com', 'doe.john@example.com'],
    address: [
      {
        country: 'USA',
        city: 'New York',
        zipCode: '10001',
        street1: 'Main St',
        street2: 'Apt A'
      }
    ]
  },
  {
    id: 122,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '987-654-321',
    emails: ['jane.doe@example.com'],
    address: [
      {
        country: 'USA',
        city: 'Los Angeles',
        zipCode: '90001',
        street1: 'Center St',
        street2: 'Apt B'
      }
    ]
  },
  {
    id: 140,
    firstName: 'Person',
    lastName: 'Eleven',
    phoneNumber: '999-999-9999',
    emails: ['person.eleven@example.com'],
    address: [
      {
        country: 'Canada',
        city: 'Toronto',
        zipCode: 'M5B 2K3',
        street1: 'Yonge Street',
        street2: ''
      }
    ]
  },
  {
    id: 145,
    firstName: "Alice",
    lastName: "Johnson",
    phoneNumber: "555-123-4567",
    emails: ["alice.johnson@example.com"],
    address: [
      {
        country: "Canada",
        city: "Toronto",
        zipCode: "M5H 2N2",
        street1: "789 Maple Ave",
        street2: ""
      }
    ]
  },
  {
    id: 148,
    firstName: "Bob",
    lastName: "Brown",
    phoneNumber: "444-567-8901",
    emails: ["bob.brown@example.com"],
    address: [
      {
        country: "USA",
        city: "Chicago",
        zipCode: "60601",
        street1: "321 Oak St",
        street2: ""
      }
    ]
  },
  {
    id: 14,
    firstName: "Carol",
    lastName: "Davis",
    phoneNumber: "333-789-0123",
    emails: ["carol.davis@example.com"],
    address: [
      {
        country: "USA",
        city: "Houston",
        zipCode: "77001",
        street1: "654 Pine St",
        street2: "Suite 200"
      }
    ]
  },
  {
    id: 1404,
    firstName: "David",
    lastName: "Wilson",
    phoneNumber: "222-890-1234",
    emails: ["david.wilson@example.com"],
    address: [
      {
        country: "USA",
        city: "Phoenix",
        zipCode: "85001",
        street1: "987 Cedar St",
        street2: ""
      }
    ]
  },
  {
    id: 15,
    firstName: "Eva",
    lastName: "Martinez",
    phoneNumber: "111-012-3456",
    emails: ["eva.martinez@example.com"],
    address: [
      {
        country: "USA",
        city: "San Antonio",
        zipCode: "78201",
        street1: "432 Birch St",
        street2: "Apt 1A"
      }
    ]
  },
  {
    id: 159,
    firstName: "Frank",
    lastName: "Garcia",
    phoneNumber: "666-234-5678",
    emails: ["frank.garcia@example.com"],
    address: [
      {
        country: "USA",
        city: "San Diego",
        zipCode: "92101",
        street1: "765 Spruce St",
        street2: ""
      }
    ]
  },
  {
    id: 161,
    firstName: "Grace",
    lastName: "Lee",
    phoneNumber: "777-345-6789",
    emails: ["grace.lee@example.com"],
    address: [
      {
        country: "USA",
        city: "Dallas",
        zipCode: "75201",
        street1: "987 Ash St",
        street2: ""
      }
    ]
  },
  {
    id: 1610,
    firstName: "Henry",
    lastName: "White",
    phoneNumber: "888-456-7890",
    emails: ["henry.white@example.com"],
    address: [
      {
        country: "USA",
        city: "San Jose",
        zipCode: "95101",
        street1: "123 Redwood St",
        street2: ""
      }
    ]
  },
  {
    id: 89,
    firstName: "Isabel",
    lastName: "King",
    phoneNumber: "999-567-8901",
    emails: ["isabel.king@example.com"],
    address: [
      {
        country: "USA",
        city: "Austin",
        zipCode: "73301",
        street1: "456 Willow St",
        street2: "Apt 5C"
      }
    ]
  },
  {
    id: 989,
    firstName: "Jack",
    lastName: "Harris",
    phoneNumber: "000-678-9012",
    emails: [],
    address: [
      {
        country: "USA",
        city: "Jacksonville",
        zipCode: "32099",
        street1: "789 Cypress St",
        street2: ""
      }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getAll(): Contact[] {
    return CONTACTS;
  }

  delete(contactToDelete: Contact): boolean {
    const findIndex: number | undefined = CONTACTS?.findIndex(el => el === contactToDelete);
    if (findIndex !== undefined && findIndex !== -1) {
      CONTACTS.splice(findIndex, 1);
      return true;
    }
    return false;
  }

  edit(contactToEdit: Contact, newcontact: Contact): Contact {
    const findIndex: number | undefined = CONTACTS?.findIndex(el => el === contactToEdit);
    if (findIndex !== undefined && findIndex !== -1) {
      CONTACTS[findIndex] = {
        ...contactToEdit,
        firstName: newcontact.firstName,
        lastName: newcontact.lastName,
      };
      return newcontact;
    }
    throw new Error("Contact not found");
  }

  getById(contactId: number): Contact | undefined {
    return CONTACTS.find(value => value.id === contactId);
  }
}
