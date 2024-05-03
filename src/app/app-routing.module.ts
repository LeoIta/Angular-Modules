import { NgModule } from '@angular/core';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './order/address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { ThanksComponent } from './order/thanks/thanks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
      },
    ],
  },
  {
    path: 'order',
    component: OrderComponent,
    children: [
      {
        path: 'address',
        component: AddressComponent,
      },
    ],
  },
  { path: 'summary', component: SummaryComponent },
  { path: 'thankyou', component: ThanksComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
