import { Component } from '@angular/core';


@Component({
  selector: 'app-signupt',
  templateUrl: './signupt.component.html',
  styleUrls: ['./signupt.component.css']
})
export class SignuptComponent {
  username='';
  password='';
  confirmpass='';
  constructor(){}
  CloseModel() {
    const modelDiv = document.getElementById('modalinscription');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }}
    ngOnInit() {
      const closeButton = document.getElementById('closeButton');
      if (closeButton) {
        closeButton.addEventListener('click', this.CloseModel.bind(this));
      }
    }
    
  }
  
