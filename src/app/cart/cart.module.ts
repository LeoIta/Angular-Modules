import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, AccountComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CartComponent, AccountComponent],
})
export class CartModule {}
