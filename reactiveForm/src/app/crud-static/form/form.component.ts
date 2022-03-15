import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private idToEdit: number;
  public empForm : FormGroup;
  constructor(private fb: FormBuilder, private cs: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.buildEmployee();
  }

  buildEmployee(): void {
    this.empForm = this.fb.group({
      name: [''],
      email: [''],
      company: ['']
    });
  } 

  onSubmit(): void {
    if (this.idToEdit) {
      this.cs.editData(this.idToEdit, this.empForm.value);
      this.router.navigateByUrl('/crud/list');
    }
  }
}
