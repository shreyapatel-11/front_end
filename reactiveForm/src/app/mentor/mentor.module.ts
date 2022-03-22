import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MentorComponent,
    MentorFormContainerComponent,
    MentorListContainerComponent,
    MentorFormPresentationComponent,
    MentorListPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class MentorModule { }
