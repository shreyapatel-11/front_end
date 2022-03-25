import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MentorForm } from '../../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class FilterFormPresenterService {

  constructor(private fb: FormBuilder) { 
   
  }

  mentorForm: FormGroup;
  
  builForm() {
    return this.mentorForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      email: [''],
      experience: ['']
    })
  }

}
