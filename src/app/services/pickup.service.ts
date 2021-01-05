import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pickup } from 'app/models/pickup';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Pickup[]>(`${environment.apiUrl}/api/pickup`);
  }

  save(pickup: Pickup) {
    return this.http.post(`${environment.apiUrl}/api/pickup/save`, pickup);
  }

  update(pickup: Pickup) {
    return this.http.put(`${environment.apiUrl}/api/pickup/update`, pickup);
  }

  setDeleted(pickup: Pickup) {
    return this.http.put(`${environment.apiUrl}/api/pickup/delete`, pickup);
  }

  findById(id: number) {
    return this.http.get<Pickup>(`${environment.apiUrl}/api/pickup/id?id=` + id);
  }

  getAllByDate(date: Date) {
    return this.http.get<Pickup[]>(`${environment.apiUrl}/api/pickup/date?date=` + date);
  }

  getAllByDateAndCar(date: Date, idcar: number) {
    return this.http.get<Pickup[]>(`${environment.apiUrl}/api/pickup/date?date=` + date + `idcar?idcar=` + idcar);
  }
}
