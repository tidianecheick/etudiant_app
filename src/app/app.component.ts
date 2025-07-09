import { Component } from '@angular/core';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { ListEtudiantComponent } from "./list-etudiant/list-etudiant.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HomeEtudiantComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'etudiant-app';
}
