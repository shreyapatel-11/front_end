import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'user',
  },
  {
    path: 'user',
    loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  },
  {
    path: 'assesment',
    loadChildren: () => import('./assesment-1/module/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'overlay',
    loadChildren: () => import('./cdk-overlay/cdk-overlay.module').then(m => m.CdkOverlayModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./ng-template/ng-template.module').then(m => m.NgTemplateModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud-static/crud-static.module').then(m => m.CrudStaticModule)
  },
  { 
    path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) 
  },
  { 
    path: 'sibling', loadChildren: () => import('./sibling/sibling.module').then(m => m.SiblingModule) 
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
