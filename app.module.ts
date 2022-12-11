import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { Comp1 } from './comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgswitchhomeComponent } from './ngswitchhome/ngswitchhome.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgclasshomeComponent } from './ngclasshome/ngclasshome.component';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { SimpletemplatehomeComponent } from './simpletemplatehome/simpletemplatehome.component';
import { templatePracticeComponent } from './templatepractice/templatepractice.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactivepracticeComponent } from './reactivepractice/reactivepractice.component';
import { DemoService } from './services/demo.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DigitcoutPipe } from './pipes/digitcout.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { Comp1Component } from './comp1/comp1.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { Compo4Component } from './compo4/compo4.component';
import { Compo5Component } from './compo5/compo5.component';
import { Compo6Component } from './compo6/compo6.component'

import { CarModule } from './car/car.module';
import { CarComponent } from './car/car.component';

import { HeadersInterceptor } from './headers.interceptor';
import { LoginformComponent } from './loginform/loginform.component';
import { ToastrModule } from 'ngx-toastr';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PreloadingDirective } from './preloading.directive';
import { ApicallComponent } from './apicall/apicall.component';
import { IbmComponent } from './ibm-component/ibm.component';













@NgModule({
  declarations: [
  AppComponent,
  // Comp1,
  Comp2Component,
  NgforComponent,
  NgswitchComponent,
  NgswitchhomeComponent,
  NgstyleComponent,
  NgclassComponent,
  NgclasshomeComponent,
  ChildComponent,
  LifecyclehooksComponent,
  InputoutputComponent,
  SimpletemplateComponent,
  SimpletemplatehomeComponent,
  templatePracticeComponent,
  ReactiveformComponent,
  ReactivepracticeComponent,
  UserComponent,
  PipedemoComponent,
  DigitcoutPipe,
  FilterPipe,
  HomeComponent,
  AboutusComponent,
  ContactusComponent,
  LoginComponent,
  PagenotfoundComponent,

  CarComponent,
  // Comp1Component,
  Compo1Component,
  Compo2Component,
  Compo3Component,
  Compo4Component,
  Compo5Component,
  Compo6Component,
  LoginformComponent,
  ApicallComponent,
  IbmComponent


  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule

  
   ],
   
  providers: [PreloadingDirective,
       {provide:HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  // /**
  //  * 
  //  */
  // constructor () {
  // console.log('appModule called');
  // }
  
 }
