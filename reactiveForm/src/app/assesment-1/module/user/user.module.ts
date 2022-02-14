import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentsPipe } from '../pipes/departments.pipe';
import { SearchesPipe } from '../pipes/searches.pipe';




@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    DepartmentsPipe,
    SearchesPipe,
    UserFormComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
