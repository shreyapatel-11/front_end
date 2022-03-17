import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-form-sibling',
  templateUrl: './form-sibling.component.html',
  styleUrls: ['./form-sibling.component.scss']
})
export class FormSiblingComponent implements OnInit {

  public userForm: FormGroup;
  // userData: import("c:/Users/shreya.patel/Desktop/git/front_end/reactiveForm/src/app/mvp/mvp.model").User;
  // public uName: string;
  constructor(private fb: FormBuilder, private siblingService: SiblingService) { 
    this.siblingService.userData.subscribe(data => {
      this.userData = data;
    })
  }

  ngOnInit(): void {
    this.userForm = this.buildForm()
  }
   
  buildForm(){
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  userName: string ="hello";

  onSubmit(){
    this.siblingService.userData.next(this.userForm.value);
  }
  
  onSubmitButton(uName: { value: string; }){
    // this.userName = uName.value;
    this.siblingService.userName.next(uName.value);
  }
}
