import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../../model/user.model';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  department: Department[];
  uidToEdit: number;

  constructor(private fb:FormBuilder,private us: UserService,private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildUserForm();
    this.getDept();
    this.empToEdit();
  }

  buildUserForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      city: [''],
      gender: [''],
      department: ['', Validators.required],
      date: [''],
    })
  }

  get formControl() {
    return this.userForm.controls;
  }
 
  getDept() {
    this.us.getDepartment().subscribe((data) => {
      this.department = data;
    },
    (errors) => {
      console.log(errors)
    }) 
  }

  empToEdit() {
    if (this.activeRoute.snapshot.params['id']) {
      this.us.getEmployeeToEdit().subscribe((data) => {
        this.userForm.patchValue(data);
        this.uidToEdit = this.activeRoute.snapshot.params['id'];
      })
    }
  }

  saveUserData() {
    if(this.userForm.valid){
      if(this.uidToEdit){
        this.us.updateEmployeeList(this.uidToEdit, this.userForm.value).subscribe((data) => {
          this.route.navigate([`/assesment/list`])
        })
      }
      else{
        this.us.saveEmployee(this.userForm.value).subscribe((data) => {
          this.route.navigate([`assesment/list`]);
        })
        console.log(this.userForm)
      }
    }  
    
  }

}
