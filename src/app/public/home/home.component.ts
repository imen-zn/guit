import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignuptComponent } from 'src/app/authentification/signupt/signupt.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialogRef : MatDialog){}
  openDialogins(){
    this.dialogRef.open(SignuptComponent,
      { width:'40%',});
      }

}
