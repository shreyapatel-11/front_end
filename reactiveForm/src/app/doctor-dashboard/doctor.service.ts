import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]> (`http://localhost:3000/patient`);
  }
}
