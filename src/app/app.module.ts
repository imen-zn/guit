import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { LoginComponent } from './authentification/login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { TechnicienModule } from './technicien/technicien.module';
import { InterceptorauthInterceptor } from './interceptors/interceptorauth.interceptor';
import { SignuptComponent } from './authentification/signupt/signupt.component';
import { HeaderComponent } from './public/header/header.component';

import { SignupClientComponent } from './authentification/signup-client/signup-client.component';
import { SignupTechnicienComponent } from './authentification/signup-technicien/signup-technicien.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignuptComponent,
    SignupClientComponent,
    SignupTechnicienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClientModule,
    AdminModule,
    TechnicienModule,
    MatDialogModule,  RouterModule,
    


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorauthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
