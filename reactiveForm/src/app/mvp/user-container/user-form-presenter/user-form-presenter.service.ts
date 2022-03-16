import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UserForm } from '../../mvp.model';

@Injectable()
export class UserFormPresenterService {

  private userFormData: Subject<UserForm>;
  public userFormData$: Observable<UserForm>;

  constructor(private fb: FormBuilder) {
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();

    this.userFormData$ = this.userFormData.asObservable();
  }

  buildForm(){
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  onSubmit(userForm: FormGroup) {
    if(!userForm.valid){
      return;
    }
    this.userFormData.next(userForm.value);
  }
}
