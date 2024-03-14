import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItemComponent } from './stor-item/stor-item.component';
import { StoreListComponent } from './stor-list/stor-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    StoreItemComponent,
    StoreListComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule,
    CartModule
  ],
  exports: [
    StoreItemComponent,
    StoreListComponent
  ]
})
export class StorModule { }
