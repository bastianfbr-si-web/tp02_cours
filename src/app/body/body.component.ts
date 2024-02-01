import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [FormsModule, ChildComponent]
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

  logPrenom(event: any) {
    console.log(event);
  }
}
