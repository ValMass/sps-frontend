import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetriveLoggedUserService {

  constructor( private http: HttpClient) { }

  getLoggedUser( userName: string) {
    return this.http.post<any>(environment.apiUrl + '/user/getLoggedUser.php', { userName });
  }
}
