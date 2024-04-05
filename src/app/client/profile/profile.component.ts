import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editMode: boolean = false;

  toggleEdit() {
    this.editMode = !this.editMode;
  }
  nomComplet: string = "John Doe";
  etablissement: string = "Nom de l'établissement";
  adresse: string = "Adresse de l'utilisateur";
  telephone: string = "(333) 000 555";
  email: string = "example@example.com";
}
