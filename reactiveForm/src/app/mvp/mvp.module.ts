import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpRoutingModule } from './mvp-routing.module';
import { MvpComponent } from './mvp.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserFormPresentationComponent } from './user-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-container/user-list-presentation/user-list-presentation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MvpService } from './mvp.service';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [
    MvpComponent,
    UserContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
    MvpService
  ]
})
export class MvpModule { }
