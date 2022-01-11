import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) { }
  userData = new BehaviorSubject(null);
  token: any = localStorage.getItem('userToken');

  login(loginForm: any): Observable<any> {
    let params = new HttpParams({ fromObject: loginForm });

    return this._HttpClient.post(`http://135.181.95.148:1000/Token`, params.toString())
  }

  getProfileData() {
    return this._HttpClient.get('http://135.181.95.148:1000/api/Account/GetMyProfile')
  }
}
