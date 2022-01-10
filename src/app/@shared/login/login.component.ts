import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@app/service/login.service';

export class loginForm {
  username: string = "";
  Password: string = "";
  grant_type: string = "password"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: loginForm = new loginForm()
  hide = true;
  error = "";

  constructor(public auth: LoginService, private _Router: Router) { }
  sure(login: NgForm) {
    if (login.valid)
      this.auth.login(this.loginData).subscribe((res: any) => {
        console.log("sjvbdkvhbdkvb", res);
        if (res.role == "Students") {
          localStorage.setItem('userToken', res.access_token);
          // this.profileData()
          this._Router.navigate(['/admin'])
        }
      },
        (error) => {
          this.error = error.error.error_description
        })
  }

  ngOnInit(): void {
  }

}
