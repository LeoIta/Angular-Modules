import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './product/products.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { SummaryModule } from './summary/summary.module';
import { ThanksModule } from './thanks/thanks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CartModule,
    OrderModule,
    AppRoutingModule,
    ProductsModule,
    SummaryModule,
    ThanksModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
