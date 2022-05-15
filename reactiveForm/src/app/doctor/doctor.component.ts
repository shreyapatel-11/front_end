import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Medical, Prescription } from './medical.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getPrescriptionData();
  }

  public data: Medical[] = [
    {
      medical: "Medicare Pharmacy 1",
      number: 99999999998,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 2",
      number: 99999999988,
      address: "Valsad,Gujarat"
    },
    {
      medical: "Medicare Pharmacy 3",
      number: 99999999999,
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

}
