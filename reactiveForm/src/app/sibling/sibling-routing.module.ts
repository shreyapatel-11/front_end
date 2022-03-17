import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSiblingComponent } from './list-sibling/list-sibling.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: ListSiblingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiblingRoutingModule { }
