import { TimesheetsModule } from './components/timesheets/module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RetrievePasswordComponent } from './components/retrieve-password/retrieve-password.component';
import { ErrorInterceptor, JwtInterceptor } from './helpers';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {Router, RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
registerLocaleData(localeIt, 'it-IT');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RetrievePasswordComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SidenavbarComponent,
    CreateUserComponent,
    ProfilepageComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatToolbarModule,
    TimesheetsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'it-IT'}

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent, TimesheetsModule]
})
export class AppModule { }

