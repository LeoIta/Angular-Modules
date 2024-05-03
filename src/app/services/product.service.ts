export class ProductService {
  defaultProducts = [
    { name: 'screen', price: 500, rate: 8 },
    { name: 'keyboard', price: 200, rate: 7 },
    { name: 'mouse', price: 50, rate: 7 },
  ];

  products = this.defaultProducts.slice();

  selectedProducts: { name: string; price: number; rate: number }[] = [];

  totalSum = 0;

  removeFromCart(
    product: { name: string; price: number; rate: number },
    index: number
  ) {
    this.selectedProducts.splice(index, 1);
    this.products.push(product);
    this.totalSum -= product.price;
  }

  addToCart(
    product: { name: string; price: number; rate: number },
    index: number
  ) {
    this.products.splice(index, 1);
    this.selectedProducts.push(product);
    this.totalSum += product.price;
  }

  reset() {
    this.selectedProducts = [];
    this.totalSum = 0;
    this.products = this.defaultProducts.slice();
  }
}
