import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})

export class DeleteFormComponent implements OnInit {
  durationInSeconds = 5;
  done: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _GetDataService: GetDataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sure() {
    this._GetDataService.delArtical(this.data.id).subscribe((res: any) => {
      console.log(res);
      this.done = res.message;
      if (res.message == "تم الحذف بنجاح") {
        this.openSnackBar()
      }
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.done
    });
  }

}
