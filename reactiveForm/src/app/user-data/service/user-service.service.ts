import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Department, Employee } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiLink: string;
  
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiLink}/employee`);
  }
}
