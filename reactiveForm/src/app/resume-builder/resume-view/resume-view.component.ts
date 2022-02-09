import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resumeData } from '../resume-form/model/resume.model';
import { ResumeService } from '../resume-form/service/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  resume: resumeData[];

  constructor(private rs: ResumeService, private route: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.rs.getUserData().subscribe((data: resumeData[]) => {
      this.resume = data;
    })
  }
  editUser(sendUser: resumeData) {
    this.rs.sendUserToEdit(sendUser);
    this.route.navigate([`/resume/form/${sendUser.id}`])
  }
  deleteRecord(id: number) {
    this.rs.deleteUserData(id).subscribe((data) => {
      this.getData()
    })
  }
}
