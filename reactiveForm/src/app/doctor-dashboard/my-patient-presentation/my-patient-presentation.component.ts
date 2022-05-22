import { Component, OnInit } from '@angular/core';
import { Patient } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-my-patient-presentation',
  templateUrl: './my-patient-presentation.component.html',
  styleUrls: []
})
export class MyPatientPresentationComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  public patientData: Patient[];

  getPatient() {
    this.doctorService.getPatient().subscribe(data => {
      this.patientData = data;
      console.log(data);
    })
  }
 
}
