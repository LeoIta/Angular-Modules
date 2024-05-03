import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './order/address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { ThanksComponent } from './order/thanks/thanks.component';
import { ProductService } from './services/product.service';

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
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    AccountComponent,
    OrderComponent,
    AddressComponent,
    SummaryComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
