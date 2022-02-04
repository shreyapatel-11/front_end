import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
//--------------------------------------

const routes: Routes = [
 
  {
    path: '', component: UserListComponent,
    children: [
      // {
      //   path: '', component: UserAddComponent
      // },
      {
        path: 'add', component: UserAddComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
