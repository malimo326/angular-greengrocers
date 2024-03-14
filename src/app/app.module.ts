import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { StorModule } from './stor/stor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StorModule, CartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
