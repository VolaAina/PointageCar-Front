import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/user`);
  }

  save(user: User) {
    return this.http.post(`${environment.apiUrl}/api/user/save`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.apiUrl}/api/user/update`, user);
  }

  setDeleted(user: User) {
    return this.http.put(`${environment.apiUrl}/api/user/delete`, user);
  }

  findById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/api/user/id?id=` + id);
  }

  userExists(user: User) {
    return this.http.post(`${environment.apiUrl}/api/user/exists`, user)
  }

  findByMatricule(matricule: String) {
    return this.http.get<User>(`${environment.apiUrl}/api/user/matricule?matricule=` + matricule);
  }
}
