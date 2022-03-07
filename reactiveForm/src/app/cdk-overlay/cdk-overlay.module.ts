import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkOverlayRoutingModule } from './cdk-overlay-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CdkOverlayRoutingModule
  ]
})
export class CdkOverlayModule { }
