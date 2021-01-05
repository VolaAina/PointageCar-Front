import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from 'app/models/delivery';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Delivery[]>(`${environment.apiUrl}/api/delivery`);
  }

  save(delivery: Delivery) {
    return this.http.post(`${environment.apiUrl}/api/delivery/save`, delivery);
  }

  update(delivery: Delivery) {
    return this.http.put(`${environment.apiUrl}/api/delivery/update`, delivery);
  }

  setDeleted(delivery: Delivery) {
    return this.http.put(`${environment.apiUrl}/api/delivery/delete`, delivery);
  }

  findById(id: number) {
    return this.http.get<Delivery>(`${environment.apiUrl}/api/delivery/id?id=` + id);
  }

  getAllByDate(date: Date) {
    return this.http.get<Delivery[]>(`${environment.apiUrl}/api/delivery/date?date=` + date);
  }

  getAllByDateAndCar(date: Date, idcar: number) {
    return this.http.get<Delivery[]>(`${environment.apiUrl}/api/delivery/date?date=` + date + `idcar?idcar=` + idcar);
  }
}