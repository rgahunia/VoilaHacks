import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdvisorLayoutComponent } from './layouts/advisor-layout/advisor-layout.component';
// adv layout 
//const routes: Routes = [];
const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'advisor',
    component: AdvisorLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/advisor-layout/advisor-layout.module#AdvisorLayoutModule'
  }]},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
