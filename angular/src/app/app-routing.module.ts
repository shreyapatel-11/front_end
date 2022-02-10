import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'header', component: HeaderComponent},
  {path:'aside', component: AsideComponent},
  {path:'section', component: SectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const components = [
  HeaderComponent,
  AsideComponent,
  SectionComponent
]