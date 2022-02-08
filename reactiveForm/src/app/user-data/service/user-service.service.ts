import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { Department, Employee } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiLink: string;
  editEmployee: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(
    {
      "id": 1,
      "firstName": "Shreya",
      "lastName": "Patel",
      "email": "ab@gmail.com",
      "mobile": 9999988888,
      "gender": true,
      "department": 1,
      "date": ''
    }
  );
  
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiLink}/employee`);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiLink}/employee`,employee)
  }

  updateEmployeeList(id: number,employee: Employee) : Observable<Employee>{
    return this.http.put<Employee>(`${this.apiLink}/employee/${id}`, employee)
  }

  sendEmployeeToEdit(employee: Employee) {
    this.editEmployee.next(employee);
  }

  getEmployeeToEdit(): Observable<Employee>{
    return this.editEmployee.asObservable();
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employee/${id}`)
  }
}
