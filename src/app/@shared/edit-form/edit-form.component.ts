import { Component, OnInit } from '@angular/core';
import { GetDataService } from '@app/service/get-data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  constructor(public _GetDataService: GetDataService) { }

  ngOnInit(): void {
  }

}
