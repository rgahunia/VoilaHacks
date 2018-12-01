import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { LoginComponent } from './login/login.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { AdvSidebarModule } from './advisor/sidebar/advsidebar.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdvisorLayoutComponent } from './layouts/advisor-layout/advisor-layout.component';
import { AdvisorUserComponent } from './advisor/user/advuser.component'; // './layouts/advisor-layout/advisor-layout.component';
import { AlertService, AuthenticationService, UserService } from './_services';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdvisorLayoutComponent,
    AdvisorUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    AdvSidebarModule,
    FooterModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
