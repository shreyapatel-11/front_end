import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpComponent } from './mvp.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserFormPresentationComponent } from './user-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-container/user-list-presentation/user-list-presentation.component';

const routes: Routes = [
  { path: '', component: MvpComponent,
    children: [
      {
        path: '', redirectTo: 'user', pathMatch: 'full'
      },
      {
        path:'user',component:UserContainerComponent
      },
      // {
      //   path: 'list', component: UserListPresentationComponent
      // },
      {
        path: 'add', component: UserFormPresentationComponent
      },
      {
        path: 'edit/:id', component: UserFormPresentationComponent
      }, 
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
