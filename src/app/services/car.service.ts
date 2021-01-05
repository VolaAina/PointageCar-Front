import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'app/models/car';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car`);
  }

  save(car: Car) {
    return this.http.post(`${environment.apiUrl}/api/car/save`, car);
  }

  update(car: Car) {
    return this.http.put(`${environment.apiUrl}/api/car/update`, car);
  }

  setDeleted(car: Car) {
    return this.http.put(`${environment.apiUrl}/api/car/delete`, car);
  }

  findById(id: number) {
    return this.http.get<Car>(`${environment.apiUrl}/api/car/id?id=` + id);
  }

  carExists(car: Car) {
    return this.http.post(`${environment.apiUrl}/api/car/exists`, car)
  }

  findByImmatriculation(immatriculation: String) {
    return this.http.get<Car>(`${environment.apiUrl}/api/car/immatriculation?immatriculation=` + immatriculation);
  }
}
