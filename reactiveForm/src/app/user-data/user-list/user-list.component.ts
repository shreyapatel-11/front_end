import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Department, Employee } from '../model/user.model';
import { Router } from '@angular/router';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { UserFormComponent } from '../user-form/user-form.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  employee: Employee[];
  searchData: string = '';
  dpt: Department[];

  constructor(private us: UserServiceService, private router: Router, private overlay: Overlay) {
      this.employee = [];
      this.dpt = [];
   }


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

  openForm() {
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(UserFormComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.department = this.dpt;
  }
}
