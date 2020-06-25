import { Injectable } from '@angular/core';
import { Router , Resolve , RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAnagraphicResolverService implements Resolve<any> {

  public id: string;
  constructor(private http: HttpClient) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const url = environment.apiUrl + '/anagraphicData/getAnagraphicDataById.php';
    const id = this.id = '1';
    return this.http.post(url , { id }).pipe(catchError(error   => {
      return EMPTY;
    }), mergeMap(something => {
         if (something) {
            return of(something);
         } else {
            return EMPTY;
         }
       })
     );
  }
}
