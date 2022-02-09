import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resumeData } from '../model/resume.model';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apiLink: string
  constructor(private http: HttpClient) { }

  getUserData() : Observable<resumeData[]>{
    return this.http.get<resumeData[]>(`${this.apiLink}/skill`)
  }
}
