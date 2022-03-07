import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, User } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public modalTitle: string;
  private isAddMode: boolean;

  @Input() public id: number = 0;
  @Input() public editData: User;
  @Input() public department: Department[];

  @Output() public userForm;
  @Output() public cancel;

  // department: Department[];
  uidToEdit: number;
  // userForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserServiceService, private activeRoute: ActivatedRoute) {
    this.modalTitle = 'Add User';
    this.editData = {} as User;
    this.department = [];
    this.isAddMode = true;
    this.userForm = new EventEmitter<User>();
    this.cancel = new EventEmitter<String>();
   }

  ngOnInit(): void {
    // this.buildUserForm()
    // console.log(this.userForm)
    // this.getUSerdata()
    // if (this.activeRoute.snapshot.params['id']) {
    //   this.us.getEmployeeToEdit().subscribe((data) => {
    //     this.userForm.patchValue(data);
    //     this.uidToEdit = this.activeRoute.snapshot.params['id'];
    //   })
    // }
    if (this.id != 0) {
      this.isAddMode = false;
    }
    if (!this.isAddMode) {
      this.modalTitle = 'Edit User';
      this.buildUserForm.patchValue(this.editData);
    }
  }

  buildUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: [null, Validators.required],
      date: [null, Validators.required],
      department: ['', Validators.required]
  });

  get getvalue() {
    return this.buildUserForm.controls;
  }
  
  // getUSerdata() {
  //   this.us.getDepartment().subscribe((data) => {
  //     this.department = data;

  //   }, (errors) => {
  //     console.log(errors)
  //   })
  // }


  // saveForm() {
  //   console.log(this.userForm)
  //   if (this.userForm.valid) {
  //     if (this.uidToEdit) {
  //       this.us.updateEmployeeList(this.uidToEdit, this.userForm.value).subscribe(
  //         (data) => {
  //           //  alert("Data Updated Succesfully");
  //           this.route.navigate(['/user/list']);
  //         }
  //       )
  //     }
  //     else {
  //       this.us.saveEmployee(this.userForm.value).subscribe(
  //         (data) => {
  //           // alert("Data Submitted Succesfully");
  //           this.route.navigate(['/user/list']);
  //         }
  //       )
  //     }
  //   }
  // }

  onSubmit() {
    this.userForm.emit(this.buildUserForm.value);
  }

  resetForm() {
    this.buildUserForm.reset();
  }
  onCancel() {
    this.cancel.emit();
  }
  // get formControl() {
  //   return this.userForm.controls;
  // }
}
