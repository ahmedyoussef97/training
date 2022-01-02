import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteFormComponent } from '../delete-form/delete-form.component';
import { EditFormComponent } from '../edit-form/edit-form.component';

export interface PeriodicElement {
  CatName: string;
  Created: number;
  CreatedBy: string;
  Id: number;
  ImageURL: number;
  SouraId: number;
  Updated: number;
  UpdatedBy: string;
  setting: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  postId: number | undefined;
  displayedColumns: string[] = ['CatName', 'Created', 'CreatedBy', 'Id', 'ImageURL', 'SouraId', 'Updated', 'UpdatedBy', 'setting'];
  dataSource = ELEMENT_DATA;
  constructor(public _GetDataService: GetDataService, public dialog: MatDialog) {
  }
  getAllData() {
    this._GetDataService.getAll().subscribe((res) => {
      this.dataSource = res.data
    })
  }
  ngOnInit(): void {
    this.getAllData();
    this._GetDataService.refresh$.subscribe((res: Boolean) => {
      if (res) {
        this.getAllData()
      }
    });
  }


  addItem() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editItem() {
    const dialogRef = this.dialog.open(EditFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteItem(Id: number, CatName: string): void {
    const dialogRef = this.dialog.open(DeleteFormComponent, {
      width: '50%',
      data: {
        id: Id,
        catName: CatName,
      },
    });
  }

  // editnum(num: number) {
  //   console.log(num);

  // }

}
