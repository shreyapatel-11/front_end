import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseData } from './model/login.model';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  login: boolean = true;

  constructor(private fb: FormBuilder,private auth: AuthServiceService,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    return this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  loginSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.loginData(this.loginForm.value).subscribe((data: ResponseData) => {
       
        this.auth.setData(data.token);
        this.router.navigateByUrl("/mentor/list");
      })
    }
  }
}
