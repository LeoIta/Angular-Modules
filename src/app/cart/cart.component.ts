import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private productService: ProductService, private router: Router) {}

  sum = this.productService.totalSum;
  cartList = this.productService.selectedProducts;
  withAccount = false;

  addData() {
    this.router.navigate(['cart', 'account']);
    this.withAccount = true;
  }
}
