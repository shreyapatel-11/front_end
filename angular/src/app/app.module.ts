import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//---------------------------------------------------------------//
import { AppRoutingModule, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramComponent } from './program/program.component';
import { DirectivesDirective } from './directives.directive';
import { ServicesService } from './services/services.service';


const appRoutes: Routes=[
  
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProgramComponent,
    DirectivesDirective,
    components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
