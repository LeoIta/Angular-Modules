import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { PersonalData } from '../models/personal-data.model';
import { AddressData } from '../models/address-data.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  user: PersonalData | null = this.orderService.personalData;
  address: AddressData | null = this.orderService.addressData;
  products = this.productService.selectedProducts;
  sum = this.productService.totalSum;

  confirm() {
    this.router.navigate(['thankyou']);
    this.orderService.reset();
    this.productService.reset();
  }
}
