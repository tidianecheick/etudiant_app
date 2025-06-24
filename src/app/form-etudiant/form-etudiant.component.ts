import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-etudiant',
  standalone: true,
  imports: [CommonModule,
     ReactiveFormsModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule
    ],
  templateUrl: './form-etudiant.component.html'
})
export class FormEtudiantComponent {
  etudiantForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.etudiantForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      matricule: ['']
    });
  }

  onSubmit(): void {
    console.log(this.etudiantForm.value);
    // Ici, tu pourras appeler un service pour envoyer les données à une API
  }
}

