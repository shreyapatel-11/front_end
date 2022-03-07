import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Department, Employee, User } from '../model/user.model';
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
  employee: User[];
  searchData: string = '';
  dpt: Department[];

  editData: User;

  constructor(private us: UserServiceService, private overlay: Overlay) {
      this.employee = [];
      this.dpt = [];
      this.searchData = '';
      this.editData = {} as User;
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
    // this.router.navigate([`/user/edit/${emp.id}`]);
  }
  deleteUser(id: number): void {
    this.us.deleteUser(id).subscribe(
      (result) => {
        alert(id + ' is Deleted');
        this.getEmployeeData();
      }
    );
  }

  saveData(data: User): void {
    this.us.createUser(data).subscribe((data) => {
        alert('Data Saved Successfully');
        this.getEmployeeData();
      }
    );
  }
  updateUser(id: number, data: User): void {
    this.us.updateUser(id, data).subscribe((data) => {
        alert('Data Updated Successfully');
        this.getEmployeeData();
      }
    );
  }

  openForm() {
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(UserFormComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.department = this.dpt;

  //   if (id) {
  //     componentRef.instance.id = id;
  //     componentRef.instance.editData=this.editData;
  //     componentRef.instance.employee.subscribe((data) => {
  //       overlayRef.detach();
  //       this.updateUser(id, data);
  //     });
  //   } else {
  //     componentRef.instance.employee.subscribe((data) => {
  //       overlayRef.detach();
  //       this.saveData(data);
  //     });
  //   }
  //   componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  // }

  deleteRecord(id: number){
    this.us.deleteUser(id).subscribe((data) => {
      // alert("delete succesfully")
      this.getEmployeeData()
      let config = new OverlayConfig();

    config.hasBackdrop = true;
    config.maxWidth = '400px';
    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(delete);
    const componentRef = overlayRef.attach(component);

    // componentRef.instance.value.subscribe((result) => {
    //   if (result) {
    //     this.deleteUser(id);
    //     overlayRef.detach();
    //   } else {
    //     overlayRef.detach();
    //   }
    // });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  })
}
  
}}
