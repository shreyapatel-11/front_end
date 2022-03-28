import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, ResponseData } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  setData(token: string){
    localStorage.setItem('token', token);
  }

  loginData(creds: Login): Observable<ResponseData>{
    return this.http.post<ResponseData>(`http://localhost:3001/login`, creds);
  }
}
