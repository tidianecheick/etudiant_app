import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Etudiant {
  id:number;
  nom: string;
  prenom: string;
  email: string;
  matricule: string;
}

@Injectable({ providedIn: 'root' })
export class EtudiantService {
  setValue(arg0: { nom: string; prenom: string; email: string; matricule: string; }) {
    throw new Error('Method not implemented.');
  }
  creer(formValue: any) {
    throw new Error('Method not implemented.');
  }
  modifier(updated: Etudiant) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/etudiant';

  constructor(private http: HttpClient) {}

 //Obtenir la liste de tout les etudiants
 getAll():Observable<Etudiant[]>{
  return this.http.get<Etudiant[]>(this.apiUrl)
 }

// creer un etudiant
  enregistrer(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }
// modifier un etudiant
  Modifier(etudiant:Etudiant):Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/${etudiant.id}`,etudiant);
  }
  //supprimer un etudiant
 supprimer(id: number):Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`)

 }


//  this.http.delete<{ message: string }>(url).subscribe({
//   next: res => console.log(res.message),
//   error: err => console.error('Erreur :', err)
// });


 // Obtenir un etudiant
//  getById(id:number):Observable<Etudiant>{
//   return this.http.get<Etudiant>(`${this.apiUrl}/${id}`)
//  }

}
