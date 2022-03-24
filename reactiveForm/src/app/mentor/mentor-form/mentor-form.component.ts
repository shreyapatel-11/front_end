import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MentorForm } from '../model/mentor.model';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss']
})
export class MentorFormComponent implements OnInit {

  mentorForm: FormGroup;

  @Output() filterData: EventEmitter<MentorForm>;

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute) { 
    this.filterData = new EventEmitter<MentorForm>();
  }

  ngOnInit(): void {
    this.builForm();
  }

  builForm() {
    return this.mentorForm = this.fb.group({
      name: [''],
      age: [''],
      gender: ['']
    })
  }

  onSubmit(){
    // alert("hii");
    console.log(this.mentorForm.value)
    this.filterData.emit(this.mentorForm.value);  
  }
}
