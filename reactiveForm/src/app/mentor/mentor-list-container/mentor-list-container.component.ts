import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';
import { Mentor } from '../model/mentor.model';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {

  public mentorList$: Observable<Mentor[]>;

  constructor(private mentorService: MentorService) { 
    this.mentorList$ = new Observable();
  }

  ngOnInit(): void {
    this.mentorList$ = this.mentorService.getMentors();
  }


  delete(id: number){
    this.mentorService.deleteMentors(id).subscribe((data) => {
      console.log(data);
    })
  }

}
