import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department, Employee } from 'src/app/user-data/model/user.model';
import { UserServiceService } from 'src/app/user-data/service/user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employee: Employee[];
  searchData: string = '';
  dpt: Department[];

  constructor(private us: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeData()
    this.getUSerdata();
  }

  getUSerdata() {
    this.us.getDepartment().subscribe((data) => {
      this.dpt = data;
    })
  }
  getEmployeeData() {
    this.us.getEmployeeList().subscribe((data: Employee[]) => {
      this.employee = data;
    })
  }

  editEmployee(emp: Employee) {
    this.us.sendEmployeeToEdit(emp);
    this.router.navigate([`/user/edit/${emp.id}`]);
  }

  deleteRecord(id: number) {
    this.us.deleteUser(id).subscribe((data) => {
      // alert("delete succesfully")
      this.getEmployeeData()
    });
  }
}
