import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  public getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`http://localhost:3000/mentors`)
  }

  public addMentors(form: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`http://localhost:3000/mentors`, form)
  }

  public getMentorById(id: string): Observable<Mentor> {
    return this.http.get<Mentor>(`http://localhost:3000/mentors/${id}`)
  }

  public editMentors(id: string, form: Mentor): Observable<Mentor> {
    return this.http.put<Mentor>(`http://localhost:3000/mentors/${id}`, form)
  }
  
  public deleteMentors(id: number) {
    return this.http.delete(`http://localhost:3000/mentors/${id}`)
  }

}
