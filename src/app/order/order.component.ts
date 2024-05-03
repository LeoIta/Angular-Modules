import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(private productService: ProductService, private router: Router) {}

  sum = this.productService.totalSum;
  orderList = this.productService.selectedProducts;

  addAddress() {
    this.router.navigate(['order', 'address']);
  }
}
