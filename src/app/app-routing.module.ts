import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login-mdl/login/login.component';
import {MainComponent} from './core/main-page/main/main.component';
const routes: Routes = [
	{path:'',component:LoginComponent},
	{path:'mainpage',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
