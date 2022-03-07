import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

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
