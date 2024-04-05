import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicienComponent } from './technicien.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProfileTechComponent } from './profile-tech/profile-tech.component';

import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TechnicienComponent,
    NavbarComponent,

    ProfileTechComponent,
 
 
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class TechnicienModule { }
