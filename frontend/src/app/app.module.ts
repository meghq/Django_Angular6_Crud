import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { LoginService } from './login.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatepickerComponent } from './datepicker/datepicker.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
