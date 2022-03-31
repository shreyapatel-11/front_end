import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';



@NgModule({
  declarations: [
    PaginationComponent,
    FileUploadContainerComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    FileUploadContainerComponent,
    // FileUploadPresentationComponent
  ]
})
export class SharedModuleModule { }
