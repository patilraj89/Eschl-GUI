import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//app-module
import {LoginMdlModule} from './core/login-mdl/login-mdl.module';
//main-page module
import {MainPageModule} from './core/main-page/main-page.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	LoginMdlModule,
	ReactiveFormsModule,
	MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
