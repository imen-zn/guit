import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthserviceService, private router:Router) {}

  onSubmit() {
    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        const profile = this.authService.loadProfile(data);
        console.log(profile);
        console.log("proffrole"+profile?.roles);
        if (profile && profile.roles && profile.roles.includes("ROLE_TECHNICIEN")) {
          this.router.navigateByUrl('/technicien');
      } else if (profile && profile.roles && profile.roles.includes("ROLE_CLIENT")) {
          this.router.navigateByUrl('/client');
      } else {
          this.router.navigateByUrl('/admin');
      }
      this.CloseModel();
      },
      error => {
        // Gérer les erreurs de la requête HTTP
        console.error("Erreur lors de la connexion :", error);
      }
    );
  }
  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }
  }
}
