import { Component, OnInit } from '@angular/core';
import  { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import  { CreateUserComponent } from '../create-user/create-user.component';
import { User } from '@app/models';
//import { loginResponse } from  '@app/models';
import { UserService } from '@app/services';
import { NavComponent } from '../nav/nav.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  public token: string;
  public expire: string;

  constructor() { }

  ngOnInit() {
    // this.loading = true;
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.loading = false;
    //   this.users = users;
    // });

    const tmp = JSON.parse(localStorage.getItem('loginresposnseout'));
    this.token = tmp.access_token;
    this.expire = tmp.expire;
  }

}
