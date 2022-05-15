import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from './medical.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getPrescription(): Observable<Prescription[]>{
    return this.http.get<Prescription[]> (`http://localhost:3000/prescription`);
  }
}
