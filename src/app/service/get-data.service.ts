import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  isloading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  adminList$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _HttpClient: HttpClient) { }

  getAll() {
    this.isloading$.next(true)
    this._HttpClient.get('http://135.181.95.148:1000/api/Articles/GetAll').subscribe((res: any) => {
      this.adminList$.next(res.data)
      this.isloading$.next(false)
    });
  }
  addArticle(article: any) {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Articles/Add', article).pipe(tap(() => {
      this.getAll()
    }));
  }

  delArtical(id: any) {
    return this._HttpClient.delete(`http://135.181.95.148:1000//api/Articles/Delete/${id}/1`).pipe(tap(() => {
      this.getAll()
    }));
  }

  updateArticle(article: any) {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Articles/Update', article).pipe(tap(() => {
      this.getAll()
    }));
  }
}
