import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../crud-static/form/form.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: UserListComponent
      },
      {
        path: 'edit/:id', component: UserAddComponent
      },
      {
        path: 'add', component: UserAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
