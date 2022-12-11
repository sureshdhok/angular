import { NgModule } from '@angular/core';

import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { FrizComponent } from './friz/friz.component';
import { MixerComponent } from './mixer/mixer.component';
import { CoolerComponent } from './cooler/cooler.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';




const prodRoutes:Routes=[
  {path:'',component:ProductComponent ,children :[

    {path:'laptop', component:LaptopComponent},
    {path:'tablet',component:MobileComponent},
    {path:'tv' ,component:TvComponent},
    {path:'washingmachine',component:WashingmachineComponent},
    {path:'cooler',component:CoolerComponent},
    {path:'friz',component:FrizComponent},
    {path:'mixer',component:MixerComponent}
  ]}
]


@NgModule({
  declarations: [
    LaptopComponent,  
    TvComponent,
    MobileComponent,
    WashingmachineComponent,
    FrizComponent,
    MixerComponent,
    CoolerComponent,
    ProductComponent
  ],
  imports: [
     CommonModule,
    RouterModule.forChild(prodRoutes),
    
  ],

  exports:[ ]
})
export class ProductModule { 

constructor(){
  
  console.log('productModule called');
  
}

 
}
