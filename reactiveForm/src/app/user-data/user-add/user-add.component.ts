import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  Department=[];
  userForm: FormGroup;

  constructor(private fb :FormBuilder, private us:UserServiceService) { }

  ngOnInit(): void {
    this.buildUserForm()
    console.log(this.userForm )
  }
  buildUserForm() {
    this.userForm = this.fb.group({
      
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      mobile: ['',Validators.required],
      gender: [null],
      date: [null],
      department: ['',null]
    });
  }
  getUSerdata(){
    this.us.getDepartment().subscribe(data => {
      data=this.Department})
  }


  saveForm() {
    console.log(this.userForm)
    const dataToSave = this.userForm.value;
    if (this.userForm.valid) {
      // this.createdProduct.emit(dataToSave);
      this.resetForm();
    }
    else{
      console.log("solve Errors")
    }
  }

  resetForm() {
    this.userForm.reset();
  }
  get formControl(){
    return this.userForm.controls;
  }

}
