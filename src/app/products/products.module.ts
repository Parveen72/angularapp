import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { WasingmachinComponent } from './wasingmachin/wasingmachin.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { UtilityModule } from '../utility/utility.module';


const prodRoutes:Routes= [
  {path:'', component:ProductsComponent,
    children:[
  {path:'laptop',component:LaptopComponent},
  {path:'tv',component:TvComponent},
  {path:'tablet',component:TabletComponent},
  {path:'wasingmachin',component:WasingmachinComponent}
]}
]

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WasingmachinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
 
})
export class ProductsModule {
  constructor()
{
  console.log("Product Module Called");
  
} }
