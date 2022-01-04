import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';
import { Subscription } from 'rxjs';
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
  subscriptions: Subscription[] = [];
  constructor(public _GetDataService: GetDataService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this._GetDataService.getAll();
    const dataSub = this._GetDataService.adminList$.subscribe(res => this.dataSource = res)
    this.subscriptions.push(dataSub);

  }


  addItem() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editItem(data: any): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '300px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteItem(Id: number, CatName: string): void {
    const dialogRef = this.dialog.open(DeleteFormComponent, {
      width: '300px',
      data: {
        id: Id,
        catName: CatName,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(sub => sub.unsubscribe())
  }
}
