import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resumeData } from '../model/resume.model';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apiLink: string;
  editUser: Subject<resumeData> = new Subject;
  constructor(private http: HttpClient) { }

  getUserData(): Observable<resumeData> {
    return this.http.get<resumeData>(`${this.apiLink}/resumeForm`)
  }
  saveUserData(resumeForm: resumeData): Observable<resumeData> {
    return this.http.post<resumeData>(`${this.apiLink}/resumeForm/`, resumeForm)
  }
  updateUserData(id: number, resumeForm: resumeData): Observable<resumeData> {
    return this.http.put<resumeData>(`${this.apiLink}/resumeForm/${id}`, resumeForm)
  }
  sendUserToEdit(resumeForm: resumeData) {
    this.editUser.next(resumeForm)
  }
  getUserToEdit(): Observable<resumeData> {
    return this.editUser.asObservable();
  }
  deleteUserData(id: number): Observable<resumeData> {
    return this.http.delete<resumeData>(`${this.apiLink}/resumeForm/${id}`)
  }
}
