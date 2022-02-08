import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom.pipe';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    CustomPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
 
})
export class UserDataModule { }
