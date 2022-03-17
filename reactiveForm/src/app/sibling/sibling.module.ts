import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiblingRoutingModule } from './sibling-routing.module';
import { FormSiblingComponent } from './form-sibling/form-sibling.component';
import { ListSiblingComponent } from './list-sibling/list-sibling.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormSiblingComponent,
    ListSiblingComponent
  ],
  imports: [
    CommonModule,
    SiblingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiblingModule { }
