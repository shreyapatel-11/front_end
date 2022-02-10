import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeService } from './resume-form/service/resume.service';


@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeBuilderModule { }
