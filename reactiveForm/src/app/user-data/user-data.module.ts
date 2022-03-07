import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom.pipe';
import { SearchPipe } from './pipe/search.pipe';
// import { CdkOverlayModule } from '../cdk-overlay/cdk-overlay.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    CustomPipe,
    SearchPipe,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [
    
  ]
 
})
export class UserDataModule { }
