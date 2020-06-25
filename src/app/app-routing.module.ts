import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RetrievePasswordComponent } from './components/retrieve-password/retrieve-password.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { AuthGuard } from './helpers/auth.guard';
import { UserAnagraphicResolverService } from './services/user-anagraphic-resolver.service';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'HomeComponent', component: HomeComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'timesheets', component: TimesheetsComponent, canActivate: [AuthGuard] },
  { path: 'retrieve-password', component: RetrievePasswordComponent },
  { path: 'adduser', component: CreateUserComponent },
  { path: 'userprofile', component: ProfilepageComponent , resolve: { user: UserAnagraphicResolverService } },
  // otherwise redirect to home
  { path: '**', redirectTo: 'LoginComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
