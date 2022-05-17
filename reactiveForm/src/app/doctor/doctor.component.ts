import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Medical, Patient, Prescription } from './medical.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getPrescriptionData();
    this.getPatient();
  }

  public firstName: String = 'Virat';

  public data: Medical[] = [
    {
      medical: "Medicare Pharmacy 1",
      mobile: 99999999998,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 2",
      mobile: 99999999988,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 3",
      mobile: 99999999999,
      address: "Valsad,Gujarat"
    }
  ]

  public preData: Prescription[];

  getPrescriptionData(){
    this.doctorService.getPrescription().subscribe(data => {
      this.preData = data;
      console.log(data);
    })
  }

  public patientData: Patient[];

  getPatient() {
    this.doctorService.getPatient().subscribe(data => {
      this.patientData = data;
      console.log(data);
    })
  }
}
