import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { DragAndDropDirective } from './directive/drag-and-drop.directive';


@NgModule({
  declarations: [
    PaginationComponent,
    DragAndDropDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    DragAndDropDirective,
  ]
})
export class SharedModuleModule { }
