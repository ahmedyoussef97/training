import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetDataService } from '@app/service/get-data.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

export interface PeriodicElement {
  Id: number
  SouraId: string;
  CatName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  durationInSeconds = 5;
  done: any;
  addSnack: any;
  displayedColumns: string[] = ['CatName', 'Id', 'SouraId'];
  dataSource = ELEMENT_DATA;
  data = {
    SouraId: 1,
    CatName: "",
    ImageURL: "https://firebasestorage.googleapis.com/v0/b/alfateha-521bf.appspot.com/o/images%2Fimages%20(1).jpg?alt=media&token=68615f1c-c2c8-42cd-b8df-968f653666a0",
    ArticleDetails: [
      {
        Details: "sample string 2",
        LanguageId: 1,
        Title: "sample string 4",
        Created: "1/1/2020"
      },
      {
        Details: "sample string 2",
        LanguageId: 2,
        Title: "sample string 4",
        Created: "1/1/2020"
      }
    ],
  };
  constructor(public _GetDataService: GetDataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._GetDataService.addArticle(this.data).subscribe((res: any) => {
      if (res.StatusId == 200) {
        this.addSnack = "تمت الاضافة بنجاح"
      }
      else {
        this.addSnack = "حث خطأ"
      }
      this.openSnackBar()
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.addSnack
    });
  }

}
