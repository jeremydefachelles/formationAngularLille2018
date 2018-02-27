import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  exports: [

  ],
  declarations: [ListItemsComponent]
})
export class ItemsModule { }
