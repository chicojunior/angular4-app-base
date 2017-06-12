import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemComponent, 
    ItemListComponent
  ],
  exports: [
    ItemComponent, 
    ItemListComponent
  ]
})
export class ItemModule { }
