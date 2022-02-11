import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { resumeData } from '../model/resume.model';
import { ResumeService } from '../service/resume.service';

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

    // if (this.activeRoute.snapshot.params['id']) {
    //   this.rs.getUserToEdit().subscribe((data) => {
    //     this.resumeForm.patchValue(data);
    //     this.uidToEdit = this.activeRoute.snapshot.params['id'];
    //   })
    // }
  }
  buildForm() {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      profile: ['',Validators.required],
      techSkills: this.fb.array([this.techField()]),
      experience: this.fb.array([this.experienceField()]),
      education: this.fb.array([this.educationField()])
    })
  }

  get getValue() {
    return this.resumeForm.controls;
  }
  

  // skills
  techField(): FormGroup {
    return this.fb.group({
      techSkills: ['', Validators.required]
    })
  }

  get techSkill() {
    return this.resumeForm.get('techSkills') as FormArray
  } 

  addSkills(): void {  
    this.items = this.resumeForm.get('techSkills') as FormArray;  
    this.items.push(this.techField());
  } 
  deleteSkill(index: number) {
    if (this.techSkill.length != 1) {
      this.techSkill.removeAt(index);
    }
    console.log(this.techSkill.length)
  }
  getFormGroup(ac: AbstractControl): FormGroup{
    return ac as FormGroup
  }
  // experience
  experienceField(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      description: ['', Validators.required],
      year: ['',Validators.required],
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

  saveData() {
    this.rs.deleteUserData(1).subscribe(() => {
      this.rs.saveUserData(this.resumeForm.value).subscribe();
    })
    this.route.navigate(['./resume/view']);
    console.log(this.resumeForm);
  }
}



