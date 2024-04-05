import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { DemandeComponent } from './client/demande/demande.component';
import { ProfileComponent } from './client/profile/profile.component';
import { authentiticationGuard } from './guards/authentication.guard';
import { SignupClientComponent } from './authentification/signup-client/signup-client.component';
import { SignupTechnicienComponent } from './authentification/signup-technicien/signup-technicien.component';
import { ProfileTechComponent } from './technicien/profile-tech/profile-tech.component';

const routes: Routes = [
  {path:'public',component:PublicComponent,
  children:[
   { path: '', redirectTo: 'accueil', pathMatch: 'full' },
   {path:'accueil',component:HomeComponent},
]}, 
{path:'client',component:ClientComponent,
children:[
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil',component:DemandeComponent},
  {path:'profile',component:ProfileComponent},

]},
{
  path: '',redirectTo: 'public', pathMatch: 'full'},
{ path:'admin',component :AdminComponent},

{path:'technicien',component:TechnicienComponent},
{path:'inscriptionClient',component:SignupClientComponent},
{path:'inscriptiontech',component:SignupTechnicienComponent},
{path:'technicien/profileTech',component:ProfileTechComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
