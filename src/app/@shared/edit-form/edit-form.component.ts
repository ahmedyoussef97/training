import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export class Article {
  Id: number = 0;
  SouraId: number = 0;
  CatName: string = "";
  Created: string = "";
  ImageURL: string = "";
  ArticleDetails: [] = [];
}
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  article: Article = new Article();
  durationInSeconds = 5;
  done: any;
  editSnack: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _GetDataService: GetDataService, private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.done
    });
  }

  sure() {
    this._GetDataService.updateArticle(this.article).subscribe((res: any) => {
      console.log(res);
      this.done = res.message;
      if (res.StatusId == 200) {
        this.editSnack = "تمت الاضافة بنجاح"
      }
      else {
        this.editSnack = "حث خطأ"
      }
      this.openSnackBar()
    })
  }

  ngOnInit(): void {
    this.article = { ...this.data };
  }

}
