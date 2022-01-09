import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@app/service/auth.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { NgForm } from '@angular/forms';
export class Register {
  FullName: string = "";
  Phone: number = 0;
  Email: string = "";
  GenderId: number = 1;
  Password: string = "";
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  register: Register = new Register();
  durationInSeconds = 5;
  message: any;
  hide = true;
  confirmPassword: string = "";
  isMatch: boolean = true;
  constructor(public _AuthService: AuthService, private _snackBar: MatSnackBar) { }
  sure(form: NgForm) {
    if (form.invalid) return;
    this._AuthService.register(this.register).subscribe((res: any) => {
      console.log(res);
      if (res.StatusId == 200) {
        this.message = "تمت الإضافة بنجاح"
      }
      else {
        this.message = "يوجد خطأ ما"
      }
      this.openSnackBar()
    })
  }

  match() {
    if (this.register.Password == this.confirmPassword) {
      this.isMatch = true;
    } else {
      this.isMatch = false;
    }
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
