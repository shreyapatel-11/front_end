import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../../model/mentor.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set mentorList(value : Mentor[] | null) {
    if(value){

      this._mentorList = value;
    }
  }

  @Output() public delete: EventEmitter<number>;

  public get mentorList() : Mentor[] {
    return this._mentorList;
  }
  
  
  private _mentorList: Mentor[];
  constructor(private mentorListPresenter: MentorListPresenterService, private router: Router) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe((data: number) => {
      this.delete.emit(data);
    })
  }

  onDelete(id: number){
    this.mentorListPresenter.onDelete(id);
  }

  onEdit(id: number){
    this.router.navigateByUrl(`mentor/edit/${id}`);
  }
}
