import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    StartComponent,
    ProductComponent,
    CategoryComponent,
    ClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartComponent,
    ProductComponent,
    CategoryComponent,
    ClientComponent
  ]
})
export class MainContentModule { }
