import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";
  password="";
  constructor(private authService: AuthserviceService, private router:Router) {}

  onSubmit() {
    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(
      data => {
 console.log(data);
        const profile = this.authService.loadProfile(data);
        console.log(profile);
        console.log("proffrole"+profile?.roles);
        if (profile && profile.roles && profile.roles.includes("ROLE_ADMIN")) {

          this.router.navigateByUrl('/admin');
      }
      },
      error => {
        // Gérer les erreurs de la requête HTTP
        console.error("Erreur lors de la connexion :", error);
      }
    );
  }
 }
