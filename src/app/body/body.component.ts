import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  nom : string = "Bastian";
  valid : boolean = true;
  message : string = "";
  compteur : number = 0;

  click() {
    console.log("click");
    this.compteur++;
    this.message = ("Vous avez cliqué " + this.compteur + " fois !");
    if (this.compteur > 10) {
      this.valid = false;
      this.message = "Vous avez cliqué trop de fois !";
    }
  }
}
