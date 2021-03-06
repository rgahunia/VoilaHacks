import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdvisorLayoutComponent } from './layouts/advisor-layout/advisor-layout.component';
import { AdvisorUserComponent } from './advisor/user/advuser.component' // './layouts/advisor-layout/advisor-layout.component';
// adv layout
//const routes: Routes = [];
const routes: Routes =[
  {
    path: '',
    redirectTo: 'advisor', // dashboard
    pathMatch: 'full',
  },
  {
    path: 'advuser',
    component: AdvisorUserComponent,
    //pathMatch: 'full',
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
//     children: [
//         {
//       path: '',
//       loadChildren: './layouts/advisor-layout/advisor-layout.module#AdvisorLayoutModule'
//   },
// ]

},
  // // test  adv user
  // {
  //   path: 'advuser',
  //   component: AdvisorUserComponent,
  //    // test
  //  children: [
  //   { path: 'routes', component: RoutesComponent, outlet: 'project' },
  //   { path: 'rides/new', component: AddRideComponent, outlet: 'project' },
  //   { path: 'routes/:id', component: RideDetailsComponent, outlet: 'project' },
  //   { path: 'stops', component: StopsComponent, outlet: 'project' },
  //   { path: 'stops/new', component: AddStopComponent, outlet: 'project' },
  //   { path: 'stops/:id', component: StopDetailsComponent, outlet: 'project' }
  // ]},
  //  // test end },

  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // },

];

@NgModule({
  imports: [CommonModule,
    BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
