import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';
import { Mentor } from '../model/mentor.model';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.scss']
})
export class MentorFormContainerComponent implements OnInit {

  public mentorData$: Observable<Mentor>;
  public id: number;
  // public id!: string;

  constructor(private mentorService: MentorService, private router: Router, private activateRoute: ActivatedRoute) { 
    this.mentorData$ = new Observable();
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);

    if(this.id){
      this.mentorData$ = this.mentorService.getMentorById(this.id);
    }
  }

  ngOnInit(): void {
  }

  addMentor(mentorForm: Mentor){
    this.mentorService.addMentors(mentorForm).subscribe((data: Mentor) => {
      alert("post");
      this.router.navigateByUrl('mentor/list')
    })
  }

  editMentor(mentor: Mentor){
    this.mentorService.editMentors(mentor, this.id).subscribe((data: Mentor) => {
      alert("Edit Successfully");
      this.router.navigateByUrl('mentor/list');
    })
  }
}
