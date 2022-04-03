import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  { path: '', component: FileUploadComponent,
    children: [
      {
        path: '', redirectTo: 'file-list', pathMatch: 'full'
      },
      {
        path: 'file-list', component: FileListPresentationComponent
      },
      {
        path: 'upload', component: FileUploadPresentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
