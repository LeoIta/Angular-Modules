import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  products = this.productService.products;
  selectedProducts = this.productService.selectedProducts;
  sum = 0;
  showDetails = false;

  moveToLeft(
    product: { name: string; price: number; rate: number },
    index: number
  ) {
    this.productService.removeFromCart(product, index);
    this.sum = this.productService.totalSum;
  }

  moveToRight(
    product: { name: string; price: number; rate: number },
    index: number
  ) {
    this.productService.addToCart(product, index);
    this.sum = this.productService.totalSum;
  }

  details() {
    this.showDetails = !this.showDetails;
  }
}
