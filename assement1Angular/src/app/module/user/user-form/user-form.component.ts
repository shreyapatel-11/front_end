import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb:FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.builtUserForm();
  }

  builtUserForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      city: ['', Validators.required],
      gender: [null, Validators.required],
      department: ['', Validators.required],
      date: [null, Validators.required],
    })
  }
}
