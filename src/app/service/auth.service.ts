import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  formData$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _HttpClient: HttpClient) { }
  register(dataForm: any) {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Students/Add', dataForm)
  }
}
