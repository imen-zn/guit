import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isConnected: boolean = false;
  isTechnicien:boolean=false;
  username="";
  constructor(private authservice: AuthserviceService , private router: Router) { }
  logout(){
    this.authservice.isAuthenticated=false;
    this.authservice.accessToken="";
    this.authservice.username="";
    this.authservice.roles=undefined;
    this.router.navigateByUrl('/public');
  }
}
