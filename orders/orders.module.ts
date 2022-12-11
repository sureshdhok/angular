
import { NgModule } from '@angular/core';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderroutingModule } from './orderrouting.module';



@NgModule({
  declarations: [
    OrderlistComponent
  ],
  imports: [

    OrderroutingModule
  ]
})
export class OrdersModule { 

  constructor(){
    console.log('orderModule called');
    
  }
}
