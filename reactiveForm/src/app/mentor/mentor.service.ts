import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(' http://localhost:3000/mentors')
  }
}
