import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { nextTick } from 'process';
import { Department, Employee } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  department: Department[];
  uidToEdit: number;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private us: UserServiceService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildUserForm()
    console.log(this.userForm)
    this.getUSerdata()
    if (this.activeRoute.snapshot.params['id']) {
      this.us.getEmployeeToEdit().subscribe((data) => {
        this.userForm.patchValue(data);
        this.uidToEdit = this.activeRoute.snapshot.params['id'];
      })
    }
    // console.log(this.department)
  }
  buildUserForm() {
    this.userForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: [null, Validators.required],
      date: [null, Validators.required],
      department: ['', Validators.required]
    });
  }
  getUSerdata() {
    this.us.getDepartment().subscribe((data) => {
      this.department = data;

    }, (errors) => {
      console.log(errors)
    })
  }


  saveForm() {
    console.log(this.userForm)
    if (this.userForm.valid) {
      if (this.uidToEdit) {
        this.us.updateEmployeeList(this.uidToEdit, this.userForm.value).subscribe(
          (data) => {
            //  alert("Data Updated Succesfully");
            this.route.navigate(['/user/list']);
          }
        )
      }
      else {
        this.us.saveEmployee(this.userForm.value).subscribe(
          (data) => {
            // alert("Data Submitted Succesfully");
            this.route.navigate(['/user/list']);
          }
        )
      }
    }
  }

  resetForm() {
    this.userForm.reset();
  }
  get formControl() {
    return this.userForm.controls;
  }

}
