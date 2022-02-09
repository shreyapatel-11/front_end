import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from './service/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;
  
  techSkill: FormArray;

  constructor(private fb: FormBuilder, private rs: ResumeService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4), Validators.maxLength(8)]],
      skills: [''],
      techSkill: this.fb.array([
        this.techField()
      ]),
      experience: this.fb.array([
        this.experienceField()
      ]),
      education: this.fb.group([
        this.educationField()
      ])  
    })
  }

  get getValue() {
    return this.resumeForm.controls;
  }

  // skills
  techField() : FormGroup {
    return this.fb.group({
      techSkill: ['', Validators.required]
    })
  }

  get technicalSkill() {
    return this.getValue['techSkill'] as FormArray;
  }

  addTechSkill() {
    this.techSkill.push(this.techField());
  }
  deleteSkill(index: number){
    if(this.techSkill.length != 1){
      this.techSkill.removeAt(index);
    }
  }
  // experience
  experienceField(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      description: ['', Validators.required],
      year: [null],
    })
  }

  get experience() {
    return this.getValue['experience'] as FormArray
  }

  addExperience() {
    this.experience.push(this.experienceField())
  }

  // education
  educationField(): FormGroup{
    return this.fb.group({
      university: ['', Validators.required],
      cgpa: ['',Validators.required]
    })
  }

  get education() {
    return this.getValue['education'] as FormArray
  }

  addEducation() {
    this.education.push(this.educationField())
  }

  saveData() {
    console.log(this.resumeForm)
  }
}




