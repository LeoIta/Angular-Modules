import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './product/products.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrderModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
