import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalenoComponent } from './baleno/baleno.component';
import { VernaComponent } from './verna/verna.component';
import { DusterComponent } from './duster/duster.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';
import { UtilityModule } from '../utility/utility.module';



const carRoutes:Routes =[
  {path:'car',component:CarComponent, children: [


    {path:'baleno',component:BalenoComponent},
    {path:'duster',component:DusterComponent},
    {path:'verna',component:VernaComponent}

    
  ]}

]

@NgModule({
  declarations: [
    BalenoComponent, 
    VernaComponent,
    DusterComponent
    
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes),
    UtilityModule
  ]
})
export class CarModule { }
