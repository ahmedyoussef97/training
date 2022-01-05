import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@app/service/auth.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
export class Register {
  FullName: string = "";
  Phone: string = "";
  Email: string = "";
  GenderId: number = 1;
  Password: string = "";
  AppLangId: number = 2;
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  register: Register = new Register();
  message: any;
  durationInSeconds = 5;
  done: any;
  hide: boolean = true;
  confirm_password: number = 0;
  constructor(public _AuthService: AuthService, private _snackBar: MatSnackBar) { }
  sure() {
    this._AuthService.register(this.register).subscribe((res: any) => {
      console.log(res);
      if (res.StatusId == 200) {
        this.message = "تم التسجيل بنجاح"
      }
      else {
        this.message = "يوجد خطأ ما"
      }
      this.openSnackBar()
    })

  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.message
    });
  }
  ngOnInit(): void {
  }

}
