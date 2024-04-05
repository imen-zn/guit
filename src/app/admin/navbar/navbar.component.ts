import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
isConnected: boolean = false;
 username="";
constructor(private authservice: AuthserviceService , private router: Router) { }

ngOnInit(): void {
  if (this.authservice.isAuthenticated ) {
    console.log(this.authservice.accessToken + this.authservice.username);
    this.username=this.authservice.username;
    this.isConnected = true;


  }
}



  logout(){
    this.authservice.isAuthenticated=false;
    this.authservice.accessToken="";
    this.authservice.username="";
    this.authservice.roles=undefined;
    this.router.navigateByUrl('/login');
  }
}
