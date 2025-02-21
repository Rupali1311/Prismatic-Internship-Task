import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'ipinfo', loadChildren: () => import('./ipinfo/ipinfo.module').then(m => m.IpinfoModule) },
      { path: 'jokes', loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule) },
      { path: '', redirectTo: 'user', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]

})
export class AppRoutingModule { }
