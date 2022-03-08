import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Department, Employee } from '../model/user.model';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { UserFormComponent } from '../user-form/user-form.component';
import { DeletePopupComponent } from 'src/app/shared/delete-popup/delete-popup.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  employee: Employee[];
  searchData: string = '';
  dpt: Department[];
  editData: Employee;

  constructor(private us: UserServiceService, private overlay: Overlay) {
      this.employee = [];
      this.dpt = [];
      this.searchData = '';
      this.editData = {} as Employee;
   }


  ngOnInit(): void {
    this.getEmployeeData()
    this.getDeptdata();
    this.getdept();
  }

  getDeptdata() {
    this.us.getDepartment().subscribe((data) => {
      this.dpt = data;
    })
  }
  getEmployeeData() {
    this.us.getEmployeeList().subscribe((data: Employee[]) => {
      this.employee = data;
    })
  }

  getdept() {
    this.us.getDepartment().subscribe((data) => (this.dpt = data));
  }
  editEmployee(emp: Employee) {
    this.us.sendEmployeeToEdit(emp);
    // this.router.navigate([`/user/edit/${emp.id}`]);
  }

  saveForm(data: Employee) {
        this.us.saveEmployee(data).subscribe(
          (data) => {
            //  alert("Data Updated Succesfully");
            this.getEmployeeData();
          }
        )
  }
  editUser(id: number): void {
    this.us.getById(id).subscribe((data) => {
        this.editData = data;
        this.openForm(id);
      }
    );
  }

  updateUser(id: number, data:Employee): void {
    this.us.updateEmployeeList(id, data).subscribe((data) => {
        alert('Data Updated Successfully');
        this.getEmployeeData();
      }
    );
  }

  deleteUser(id: number): void {
    this.us.deleteUser(id).subscribe(
      (result) => {
        alert(id + ' is Deleted');
        this.getEmployeeData();
      }
    );
  }

  openForm(id?: number) {
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(UserFormComponent);
    
    const componentRef = overlayRef.attach(component);
    componentRef.instance.department = this.dpt;
    if (id) {
      componentRef.instance.id;
      componentRef.instance.editData=this.editData;
      componentRef.instance.employee.subscribe((data) => {
        overlayRef.detach();
        this.updateUser(id, data);
      });
    } else {
      componentRef.instance.employee.subscribe((data) => {
        overlayRef.detach();
        this.saveForm(data);
      });
    }
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
    componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  }

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
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.value.subscribe((result) => {
      if (result) {
        this.deleteUser(id);
        overlayRef.detach();
      } else {
        overlayRef.detach();
      }
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  })
}
  
}
