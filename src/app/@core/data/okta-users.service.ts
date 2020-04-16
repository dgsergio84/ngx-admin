import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { AuthService } from '../../@auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OktaUsersService {

  constructor( private authService: AuthService,
    private http: HttpClient ) { }

  /*
  getUser(): Observable<any> {
    return observableOf(this.oktaAuth.getUser());
  }
  */

  getUsers(): Observable<any> {
    const httpheaders = new HttpHeaders().set('Accept', 'application/json')
      .set('Authorization', `Bearer ${this.authService.getAccessToken()}`);
    
    let httpParams = new HttpParams();

    return this.http.get(`${environment.apiEndpoint.urlBase}:${environment.apiEndpoint.puerto}/personas/users`,
      {headers: httpheaders, params: httpParams, observe: 'response', responseType: 'json'});
    
  }

}
