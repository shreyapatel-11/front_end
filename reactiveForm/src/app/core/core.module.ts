import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    CoreComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  // exports: [
  //   SidebarComponent,
  // ]
})
export class CoreModule { }
