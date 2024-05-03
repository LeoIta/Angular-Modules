import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressData } from 'src/app/models/address-data.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  constructor(private orderService: OrderService, private router: Router) {}
  myForm: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required]),
    street: new FormControl(null, [Validators.required]),
    postCode: new FormControl(null, [Validators.required]),
  });

  onSubmit() {
    let address: AddressData = {
      street: this.myForm.value.street,
      city: this.myForm.value.city,
      postalCode: this.myForm.value.postCode,
    };
    this.orderService.saveAddressData(address);
    this.router.navigate(['summary']);
  }
}
