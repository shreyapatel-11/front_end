import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'', redirectTo: 'list', pathMatch: 'full',
      },
      {
        path: 'list', component: ListComponent
      },
      {
        path: 'form', component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkOverlayRoutingModule { }
