import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      name: 'Alfred Planter',
      phone: '234-345-4567',
      email: 'alfredtheplanter@gmail.com'
    },
    {
      name: 'Brandon Beck',
      phone: '293-482-2342',
      email: 'brandon.beck@yahoo.com'
    },
    {
      name: 'Daisy Harvey',
      phone: '839-283-4583',
      email: 'daisyharvey22@gmail.com'
    },
    {
      name: 'Patrick Wilson',
      phone: '283-472-3891',
      email: 'patrickwilson19@yahoo.com'
    },

  ]

  constructor() { }
}
