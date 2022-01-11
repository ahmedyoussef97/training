import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = ""

  constructor(public auth: LoginService) { }
  profileData() {
    this.auth.getProfileData().subscribe((res: any) => {
      this.userName = res.data.FullName;
    })
  }


  showFiller = false;

  ngOnInit(): void {
    this.profileData()
  }

}
