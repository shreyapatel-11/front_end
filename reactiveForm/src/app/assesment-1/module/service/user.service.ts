import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//----------------------------------------------------------
import { Department, employeeData } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink: string;
  editEmployee: BehaviorSubject<employeeData> = new BehaviorSubject<employeeData>(
    {
      "name": "Shreya Patel",
      "email": "ab@gmail.com",
      "mobile": 9999999998,
      "city": "valsad",
      "gender": true,
      "department": 1,
      "date": "",
      "id": 1
    }
  )

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  getEmployeeList(): Observable<employeeData[]> {
    return this.http.get<employeeData[]>(`${this.apiLink}/employee`);
  }
  
  saveEmployee(employee: employeeData): Observable<employeeData>{
    return this.http.post<employeeData>(`${this.apiLink}/employee`, employee)
  }

  updateEmployeeList(id: number, employee: employeeData): Observable<employeeData> {
    return this.http.put<employeeData>(`${this.apiLink}/employee/${id}`, employee)
  }

  sendEmployeeToEdit(employee: employeeData) {
    this.editEmployee.next(employee);
  }

  getEmployeeToEdit(): Observable<employeeData> {
    return this.editEmployee.asObservable();
  }

  deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employee/${id}`);
  }

}
