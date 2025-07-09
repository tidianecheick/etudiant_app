import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EtudiantService } from '../services/etudiant.service';

export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  matricule: string;
}

@Component({
  selector: 'app-form-etudiant',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,

  ],
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css'] // facultatif
})

export class FormEtudiantComponent {
 formGroup = new FormGroup({
    nom:new FormControl(''),
    prenom:new FormControl(''),
    email:new FormControl(''),
    matricul:new FormControl('')

  });



  etudiantForm: FormGroup;
  students: Etudiant[] = [];
  dataSource = this.students;
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'matricule','action'];
  clickedRows = new Set<Etudiant>();
  editingId: number | null = null;

  nextId = 1;

  constructor(
    private fb: FormBuilder,
    private etudiantService:EtudiantService)
     {
    this.etudiantForm = this.fb.group({

      nom: [''],
      prenom: [''],
      email: [''],
      matricule: ['']
    });
  }
  ngOnInit(): void {
  this.etudiantService.getAll().subscribe({
    next: data => {
      this.students = data;
      this.dataSource = [...this.students];
    },
    error: err => console.error('Erreur chargement :', err)
  });
}



 onSubmit(): void {
  if (this.formGroup.valid) {
    const formValue = this.etudiantForm .value;

    if (this.editingId) {
      const updated: Etudiant = { id: this.editingId, ...formValue };
      this.etudiantService.Modifier(updated).subscribe({
        next: () => {
          const index = this.students.findIndex(e => e.id === this.editingId);
          if (index !== -1) this.students[index] = updated;
          this.dataSource = [...this.students];
          this.editingId = null;
          this.etudiantForm.reset();
        },
        error: (err: any) => console.error('Erreur update :', err)
      });
    } else {
      this.etudiantService.enregistrer(formValue).subscribe({
        next: (created: Etudiant) => {
          this.students.push(created);
          this.dataSource = [...this.students];
          this.etudiantForm.reset();
        },
        error: (err: any) => console.error('Erreur ajout :', err)
      });
    }
  }
}

onEdit(etudiant: Etudiant): void {
  this.editingId = etudiant.id;
  this.etudiantForm.setValue({
    nom: etudiant.nom,
    prenom: etudiant.prenom,
    email: etudiant.email,
    matricule: etudiant.matricule

  });


}

onDelete(etudiant: Etudiant): void {
  let v = confirm('être vous sûr de vouloir suprimer?')
  this.etudiantService.supprimer(etudiant.id).subscribe({
    next: () => {
      this.students = this.students.filter(e => e.id !== etudiant.id);
      this.dataSource = [...this.students];
    },
    error: err => console.error('Erreur suppression :', err)
  });
}

}

