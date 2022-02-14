
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { SearchesPipe } from './assesment-1/module/pipes/searches.pipe';
// import { DepartmentsPipe } from './assesment-1/module/pipes/departments.pipe';



@NgModule({
  declarations: [
    AppComponent,
    // SearchesPipe,
    // DepartmentsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
