import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { PublicModule } from '../public/public.module';
import { DemandeComponent } from './demande/demande.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ClientComponent,
    DemandeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicModule

  ]
})
export class ClientModule { }
