import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient, private router: Router) {}

  getAll(url: string) {
    return this.http.get(url);
  }

  getById(id: any, url: string) {
    return this.http.get(url + '/' + id);
  }

  create(resource: any, url: string, targetUrl: string = 'api') {
    return this.http.post(url, resource);
  }

  update(resource: any, url: string) {
    return this.http.put(url, resource);
  }

  delete(id: any, url: string) {
    return this.http.delete(url + '/' + id);
  }
  customDelete(url: string) {
    return this.http.delete(url);
  }
}
