import { Component, OnInit } from '@angular/core';
import { resumeData } from '../resume-form/model/resume.model';
import { ResumeService } from '../resume-form/service/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  resume: resumeData[];

  constructor(private rs: ResumeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.rs.getUserData().subscribe((data) =>{
      this.resume = data;
    })
  }
}
