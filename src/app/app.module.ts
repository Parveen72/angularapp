import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { comp1 } from './comp1.component';
import { comp2 } from './comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { FileDetector } from 'protractor';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    comp1,
    comp2,
    Comp3Component,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
