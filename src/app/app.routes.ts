import { Routes } from '@angular/router';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';


export const routes: Routes = [
  {path:'form-etudiant',component:FormEtudiantComponent},
  {path:'list-etudiant',component:ListEtudiantComponent},

];
