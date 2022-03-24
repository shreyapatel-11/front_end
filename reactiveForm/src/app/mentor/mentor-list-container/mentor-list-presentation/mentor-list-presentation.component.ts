import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MentorFormComponent } from '../../mentor-form/mentor-form.component';
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

  public get mentorList() : Mentor[] {
    return this._mentorList;
  }
  
  @Output() public delete: EventEmitter<number>;
  
  private _mentorList: Mentor[];
  constructor(private mentorListPresenter: MentorListPresenterService, private router: Router, private cdr: ChangeDetectorRef) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe((data: number) => {
      this.delete.emit(data);
    });

    this.filterMentor();
  }

  onDelete(id: number){
    this.mentorListPresenter.onDelete(id);
  }

  onEdit(id: number){
    this.router.navigateByUrl(`mentor/edit/${id}`);
  }

  onOverlay(){
   this.mentorListPresenter.openOverlay();
  }
  filterMentor(){
    this.mentorListPresenter.mentorData$.subscribe(data => {
      const newMentor = this._mentorList.filter(data => data.name === data.name);
      this._mentorList = newMentor;
      this.cdr.detectChanges();
    })
  }
}
