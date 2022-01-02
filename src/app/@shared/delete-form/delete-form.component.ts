import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from '@app/service/get-data.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})

export class DeleteFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _GetDataService: GetDataService) { }

  ngOnInit(): void {
  }

  sure() {
    this._GetDataService.delArtical(this.data.id).subscribe((res: any) => {
      console.log(res);
    })
  }

}
