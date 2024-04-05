import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentification/login/login.component';
import { SignuptComponent } from 'src/app/authentification/signupt/signupt.component';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  isConnected: boolean = false;
  isClient:boolean=false;
username="";
  constructor(private authservice: AuthserviceService , private router: Router,private dialogRef : MatDialog) { }

  ngOnInit(): void {
    if (this.authservice.isAuthenticated ) {
      console.log(this.authservice.accessToken + this.authservice.username);
      this.username=this.authservice.username;
      this.isConnected = true;
      console.log("ccccccc : "+this.authservice.roles.includes("ROLE_CLIENT"));
      if(this.authservice.roles.includes("ROLE_CLIENT"))
      {this.isClient =true;}
    }
  }

  openDialog(){
    this.dialogRef.open(LoginComponent,
      { width:'40%',});
      }
closeDialog(){
  if (this.authservice.isAuthenticated) {
  this.dialogRef.closeAll();
}}
openDialogins(){
  this.dialogRef.open(SignuptComponent,
    { width:'40%',});
    }

    logout(){
      this.authservice.isAuthenticated=false;
      this.authservice.accessToken="";
      this.authservice.username="";
      this.authservice.roles=undefined;
      this.router.navigateByUrl('/public');
    }
  }


