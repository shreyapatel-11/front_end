import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department, employeeData } from '../../../model/user.model';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  employee: employeeData[];
  dept: Department[];
  searchData: string = '';

  constructor(private us: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getUser();
    this.getDept();
  }

  getUser() {
    this.us.getEmployeeList().subscribe((data: employeeData[]) =>{
      this.employee = data;
    })
  }

  getDept() {
    this.us.getDepartment().subscribe((data) => {
      this.dept = data;
    })
  }

  editEmployee(employee: employeeData) {
    this.us.sendEmployeeToEdit(employee);
    this.route.navigate([`/assesment/edit/${employee.id}`]);
  }
  
  deleteEmployeeData(id: number) {
    this.us.deleteEmployee(id).subscribe((data) => {
      this.getUser();
    })
  }
}
