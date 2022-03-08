import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateRoutingModule } from './ng-template-routing.module';
import { ViewCardComponent } from './view-card/view-card.component';
import { ViewListComponent } from './view-card/view-list/view-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewCardComponent,
    ViewListComponent
  ],
  imports: [
    CommonModule,
    NgTemplateRoutingModule,
    FormsModule
  ]
})
export class NgTemplateModule { }
