import { Injectable } from '@angular/core';
import { PersonalData } from '../models/personal-data.model';
import { AddressData } from '../models/address-data.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  personalData: PersonalData | null = null;
  addressData: AddressData | null = null;

  savePersonalData(person: PersonalData) {
    this.personalData = person;
  }
  saveAddressData(address: AddressData) {
    this.addressData = address;
  }

  reset() {
    this.personalData = null;
    this.addressData = null;
  }
}
