import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';
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
  constructor(public dialog: MatDialog, public data: GetDataService) {
    this.data.getAll().subscribe((res) => {
      console.log(res);

      this.dataSource = res.data

      console.log(this.dataSource);


    })
  }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
