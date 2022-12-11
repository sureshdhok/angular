import {  NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { CarComponent } from './car/car.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreloadingDirective } from './preloading.directive';
import { ServiceComponent } from './service/service.component';


           

 const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},  
  // {path:'service',component:ServiceComponent},  
   {path:'car',component:CarComponent} , 
   {path:'login',component:LoginComponent},           
   {path:'home', component:HomeComponent},           
   {path:'aboutus',component:AboutusComponent},      
   {path:'contactus',component:ContactusComponent},    
   {path: 'product', canActivate:[AuthGuard] ,loadChildren: './product/product.module#ProductModule',
    data:{preload:true , delay:false}},
   {path: 'service', loadChildren: './service/service.module#ServiceModule'},
   {path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
   {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
   {path:'**',component:PagenotfoundComponent}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadingDirective})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

 
