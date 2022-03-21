import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../sibling.model';

import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-form-sibling',
  templateUrl: './form-sibling.component.html',
  styleUrls: ['./form-sibling.component.scss']
})
export class FormSiblingComponent implements OnInit {

  public userForm: FormGroup;
  user!: User;
  public editMode:boolean = false;
  // userData: import("c:/Users/shreya.patel/Desktop/git/front_end/reactiveForm/src/app/mvp/mvp.model").User;
  // public uName: string;
  constructor(private fb: FormBuilder, private siblingService: SiblingService) { 
  }

  ngOnInit(): void {
    this.userForm = this.buildForm();
    this.siblingService.editData$.subscribe((res) => {
      this.editMode = true;
      this.user = res;
      this.userForm.patchValue(this.user);
    });
  }
   
  buildForm(){
    return this.fb.group({
    
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  // userName: string ="hello";

  onSubmit(){
    console.log(this.userForm.value);
    this.siblingService.userData.next(this.userForm.value);
    this.userForm.reset();
  }
  
  // saveUser() {
  //   let data = this.userForm.value;
  //   if (this.editMode) {
  //     data.id = this.user.id;
  //   }
  //   this.siblingService.userData.next(this.userForm.value);
  //   this.editMode = false;
  // }
  // onSubmitButton(uName: { value: string; }){
  //   // this.userName = uName.value;
  //   this.siblingService.userName.next(uName.value);
  // }
}
