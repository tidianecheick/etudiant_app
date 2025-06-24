import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatButtonModule,} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';






@Component({
  selector: 'app-home-etudiant',
  standalone:true,
  imports: [MatToolbar,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
  MatListModule,
  RouterLink,
  RouterModule
],
  templateUrl: './home-etudiant.component.html',
  styleUrl: './home-etudiant.component.css'
})
export class HomeEtudiantComponent {

}
