import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudStaticRoutingModule } from './crud-static-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CrudStaticRoutingModule
  ]
})
export class CrudStaticModule { }
