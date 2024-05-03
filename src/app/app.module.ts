import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './order/address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { ThanksComponent } from './order/thanks/thanks.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './product/products.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    AddressComponent,
    SummaryComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
