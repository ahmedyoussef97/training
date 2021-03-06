import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  job: string;
  email: string;
  gender: string;
  totalGoals: number;
  totalKpis: number;
  setting: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 11, totalKpis: 212, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 2, totalKpis: 2212, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 444, totalKpis: 23312, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 444, totalKpis: 21, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 231, totalKpis: 212, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 22, totalKpis: 212, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 2, totalKpis: 930, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 2, totalKpis: 223, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 33, totalKpis: 44, setting: '' },
  { name: 'ahmed', email: 'ahmed@example.com', gender: 'male', job: 'teacher', totalGoals: 2, totalKpis: 215552, setting: '' },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  postId: number | undefined;
  displayedColumns: string[] = ['setting', 'name', 'email', 'job', 'gender', 'totalGoals', 'totalKpis'];
  dataSource = ELEMENT_DATA;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
      this.postId = data.id;
    });
  }

}
