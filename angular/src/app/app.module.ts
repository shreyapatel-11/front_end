import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProgramComponent } from './program/program.component';
import { DirectivesDirective } from './directives.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    SectionComponent,
    FooterComponent,
    ProgramComponent,
    DirectivesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
