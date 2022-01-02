import { Component, OnInit } from '@angular/core';
import { GetDataService } from '@app/service/get-data.service';

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
  displayedColumns: string[] = ['CatName', 'Id', 'SouraId'];
  dataSource = ELEMENT_DATA;
  data = {
    SouraId: 1,
    CatName: "",
    ImageURL: "https://firebasestorage.googleapis.com/v0/b/alfatiha-5a446.appspot.com/o/icons%2FLogo.jpg?alt=media&token=c5676a2e-cdd4-4c53-8476-7fd47ecf8b85",
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
    ]
  };
  constructor(public _GetDataService: GetDataService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._GetDataService.addArticle(this.data).subscribe((res) => {
      console.log(res);
    })
  }

}
