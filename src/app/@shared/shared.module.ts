import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { MaterialModule } from '@app/material-module';
import { HeaderComponent } from './header/header.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { LogoComponent } from './logo/logo.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminComponent } from './admin/admin.component';
import { InnerContentComponent } from './inner-content/inner-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [

    HeaderComponent,
    HeaderLinksComponent,
    LogoComponent,
    RegisterFormComponent,
    LoginFormComponent,
    AdminComponent,
    InnerContentComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSidenavModule,
    HttpClientModule
  ],

  exports: [
    MaterialModule,
    HeaderComponent,
    AdminComponent,
    InnerContentComponent
  ],
  providers: [HttpService],
  entryComponents: [

  ],
})
export class SharedModule { }
