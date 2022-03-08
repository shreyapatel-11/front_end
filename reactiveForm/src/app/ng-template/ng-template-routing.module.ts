import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardComponent } from './view-card/view-card.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '', redirectTo: 'card', pathMatch: 'full'
      },
      {
        path: 'card', component: ViewCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateRoutingModule { }
