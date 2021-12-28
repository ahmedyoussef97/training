import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  isLoading: boolean = false;
  user: any = [];
  userObj: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private httpService: HttpService) {}
  public findUser() {
    if (!this.user.length && !this.isLoading) {
      this.isLoading = true;
      this.httpService
        .getAll('api/Account/GetMyProfile')
        .subscribe((res: any) => {
          this.user = res;
          this.userObj.next(res);
          this.isLoading = false;
        });
    }
  }
}
