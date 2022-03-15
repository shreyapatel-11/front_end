import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './mvp.model';

@Injectable({
  providedIn: 'root'
})
export class MvpService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(` http://localhost:3000/users`)
  }
}
