import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule
  ]
})
export class TodoModule { }
