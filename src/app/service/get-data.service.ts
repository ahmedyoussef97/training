import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  refresh$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  isloading: Boolean = false
  constructor(private _HttpClient: HttpClient) { }
  getAll(): Observable<any> {
    this.isloading = true;
    return this._HttpClient.get('http://135.181.95.148:1000/api/Articles/GetAll').pipe(tap(() => {
      this.isloading = false
    }));
  }
  addArticle(article: any) {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Articles/Add', article).pipe(tap(() => {
      this.refresh$.next(true)
    }));
  }
  delArtical(id: any) {
    return this._HttpClient.delete(`http://135.181.95.148:1000//api/Articles/Delete/${id}/1`).pipe(tap(() => {
      this.refresh$.next(true)
    }));
  }
  updateArticle(article: any) {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Articles/Update', article).pipe(tap(() => {
      this.refresh$.next(true)
    }));
  }
}
