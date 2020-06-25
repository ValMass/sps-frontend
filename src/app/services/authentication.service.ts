import { loginResponse } from '../models/loginResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { User } from '@app/models';
import { ROLE } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private client_secret: string;
    private client_id: string;
    private grant_type: string;
    public loginr: loginResponse;
    public user: User;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

  login(username: string, password: string, client_id: string, client_secret: string, grant_type: string) {
    return this.http.post<any>(environment.authenticationUrl, { username, password, client_id, client_secret, grant_type })
      .pipe(map(loginr => {
        console.log(`loginresposnse: ${JSON.stringify(loginr)}`);
        //console.log("status: " + JSON.stringify(userResponse.status));
        //console.log("user: " + JSON.stringify(userResponse.data));
        //console.log("role: " + userResponse.data.role);
        //localStorage.setItem('loginresposnse', JSON.stringify(loginr));
        return loginr;
      }));
  }

  retriveUser(username: string) {
    const url = environment.apiUrl + '/user/getUserByUserName.php';
    return this.http.post<any>(url , { username })
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(`loginresposnse: ${JSON.stringify(user)}`);
      //console.log("status: " + JSON.stringify(userResponse.status));
      //console.log("user: " + JSON.stringify(userResponse.data));
      //console.log("role: " + userResponse.data.role);
      return user;
    }));
  }

    logout() {
        // remove user from local storage to log user out
        localStorage.
        localStorage.removeItem('userResponse');

    }
}
