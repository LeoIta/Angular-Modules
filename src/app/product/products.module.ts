import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductsModule {}
