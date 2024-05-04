import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent, AccountComponent],
  imports: [CommonModule, FormsModule, CartRoutingModule],
  exports: [CartComponent, AccountComponent, CartRoutingModule],
})
export class CartModule {}
