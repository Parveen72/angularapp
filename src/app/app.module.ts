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
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PchildComponent } from './pchild/pchild.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MyreactiveformComponent } from './myreactiveform/myreactiveform.component';
import {ReactiveFormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import {HttpClientModule} from '@angular/common/http';
import { ForservicesComponent } from './forservices/forservices.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Comp11Component } from './comp11/comp11.component';
import { Comp22Component } from './comp22/comp22.component';
import { Comp33Component } from './comp33/comp33.component';
import { Comp44Component } from './comp44/comp44.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

import { ServiceModule } from './service/service.module';
import { ServiceComponent } from './service/service.component';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    comp1,
    comp2,
    Comp3Component,
    NgForComponent,
    NgswitchComponent,
    NgclassComponent,
    ChildComponent,
    ParentComponent,
    PchildComponent,
    SimpleFormComponent,
    MyreactiveformComponent,
    ForservicesComponent,
    PipedemoComponent,
    DigitcountPipe,
    FilterPipe,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    NotfoundComponent,
    Comp11Component,
    Comp22Component,
    Comp33Component,
    Comp44Component,
    Sub1Component,
    Sub2Component,
    
    ServiceComponent
  
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DemoService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(){
console.log("App Module Call");

}
}
