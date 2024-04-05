import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicienComponent } from './technicien.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileTechComponent } from './profile-tech/profile-tech.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TechnicienComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileTechComponent,
    FooterComponent,
 
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class TechnicienModule { }
