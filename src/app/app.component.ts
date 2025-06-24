import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HomeEtudiantComponent,
  RouterOutlet, FormEtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'etudiant-app';
}
