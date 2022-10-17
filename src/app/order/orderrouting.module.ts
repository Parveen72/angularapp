import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';

const roure: Routes=[
  { path:'',component:OrderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
  
    RouterModule.forChild(roure)
  ],
  exports:[
    RouterModule
  ]
})
export class OrderroutingModule { }
