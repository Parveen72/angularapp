import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';
;
import { UtilityModule } from '../utility/utility.module';

const serviceRoute : Routes=[
{path:'service',component:ServiceComponent ,
 children:[
  {path:'service1',component:Service1Component},
  {path:'service2',component:Service2Component}

]}
]

@NgModule({
  declarations: [Service1Component, Service2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoute),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ServiceModule {
constructor(){
  console.log("Service Module Called");
  
}

 }
