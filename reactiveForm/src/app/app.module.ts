
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DeletePopupComponent } from './shared/delete-popup/delete-popup.component';
import { DoctorModule } from './doctor/doctor.module';

// import { SearchesPipe } from './assesment-1/module/pipes/searches.pipe';
// import { DepartmentsPipe } from './assesment-1/module/pipes/departments.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DeletePopupComponent,
    // SearchesPipe,
    // DepartmentsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    DoctorModule,
    // MentorModule,
  ],
  providers: [ 
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
