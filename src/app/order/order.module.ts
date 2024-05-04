import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { AddressComponent } from './address/address.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent, AddressComponent],
  imports: [CommonModule, ReactiveFormsModule, OrderRoutingModule],
  exports: [OrderComponent, AddressComponent],
})
export class OrderModule {}
