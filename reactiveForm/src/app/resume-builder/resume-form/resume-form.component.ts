import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { resumeData } from './model/resume.model';
import { ResumeService } from './service/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;
  uidToEdit: number;
  resume: resumeData;
  items!: FormArray;  

  constructor(private fb: FormBuilder, private rs: ResumeService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.buildForm();
    this.getData();
    // if (this.activeRoute.snapshot.params['id']) {
    //   this.rs.getUserToEdit().subscribe((data) => {
    //     this.resumeForm.patchValue(data);
    //     this.uidToEdit = this.activeRoute.snapshot.params['id'];
    //   })
    // }
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      profile: [''],
      // techSkill: this.fb.array([
      //   this.techField()
      // ]), 
      techSkill: this.fb.array([]),
      experience: this.fb.array([this.experienceField()]),
      education: this.fb.array([this.addEducation()])
    })
  }

  get getValue() {
    return this.resumeForm.controls;
  }

  // skills
  techField(): FormGroup {
    return this.fb.group({
      techskill: ['', Validators.required]
    })
  }

  get techSkill() {
    return this.resumeForm.get('techSkill') as FormArray
  }

  createSkill(): FormGroup {  
    return this.fb.group({  
      skill: ''
    });  
  }   

  addSkills(): void {  
    this.items = this.resumeForm.get('techSkill') as FormArray;  
    this.items.push(this.createSkill());  
  } 
  deleteSkill(index: number) {
    if (this.techSkill.length != 1) {
      this.techSkill.removeAt(index);
    }
  }
  // experience
  experienceField(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
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
  deleteExperience(index: number) {
    if (this.experience.length != 1) {
      this.experience.removeAt(index);
    }
  }

  // education
  educationField(): FormGroup {
    return this.fb.group({
      university: ['', Validators.required],
      cgpa: ['', Validators.required]
    })
  }

  get education() {
    return this.getValue['education'] as FormArray
  }

  addEducation() {
    this.education.push(this.educationField())
  }
  deleteEducation(index: number) {
    if(this.education.length != 1) {
      this.education.removeAt(index)
    }
  }

  getData() {
    this.rs.getUserData().subscribe((data) => {
      this.resume = data;
    })
  }

  saveData() {
    if (this.resumeForm.valid) {
      this.rs.saveUserData(this.resumeForm.value).subscribe((data) => {
      })
    }
      this.route.navigate(['./resume/view'])
    console.log(this.resumeForm);
  }
}



