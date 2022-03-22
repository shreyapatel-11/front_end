import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';
import { Mentor } from '../model/mentor.model';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.scss']
})
export class MentorFormContainerComponent implements OnInit {

  public mentorData$: Observable<Mentor>
  constructor(private mentorService: MentorService, private router: Router) { 
    this.mentorData$ = new Observable();

  }

  ngOnInit(): void {
  }

  addMentor(mentorForm: Mentor){
    this.mentorService.addMentors(mentorForm).subscribe((data: Mentor) => {
      alert("post");
      this.router.navigateByUrl('mentor/list')
    })
  }
}
