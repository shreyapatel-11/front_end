import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { MyPatientPresentationComponent } from './my-patient-presentation/my-patient-presentation.component';
import { ViewPrescriptionPresentationComponent } from './view-prescription-presentation/view-prescription-presentation.component';
import { PharmacyListPresentationComponent } from './pharmacy-list-presentation/pharmacy-list-presentation.component';


@NgModule({
  declarations: [
    DoctorDashboardComponent,
    MyPatientPresentationComponent,
    ViewPrescriptionPresentationComponent,
    PharmacyListPresentationComponent
  ],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule
  ]
})
export class DoctorDashboardModule { }
