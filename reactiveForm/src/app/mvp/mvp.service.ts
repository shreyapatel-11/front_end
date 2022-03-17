import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserForm } from './mvp.model';

@Injectable({
  providedIn: 'root'
})
export class MvpService {

  constructor(private http: HttpClient) { }

  
  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`)
  }

  public addUserData(user: User): Observable<User> {
    // debugger
    return this.http.post<User>(`http://localhost:3000/users`, user)
  }

  public getUserById(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }

  public editUser(user: UserForm, id: number): Observable<UserForm> {
    return this.http.put<UserForm>(`http://localhost:3000/users/${id}`, user)
  } 

  public deleteUser(id: number){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
