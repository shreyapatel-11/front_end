import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Mentor, MentorForm } from '../../model/mentor.model';
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

  public mentorFotm: FormGroup;

  public filterMentorList: MentorForm;

  @Output() public delete: EventEmitter<number>;
  
  private _mentorList!: Mentor[];
  public mentorListData: Mentor[];

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
    this.mentorListPresenter.filterData$.subscribe((res) => {
      console.log(res);
      const newMentorData = this._mentorList.filter(data => {
        return data.name == res.name
      });
      // debugger
      this._mentorList = newMentorData;
      this.cdr.detectChanges();
      // console.log(this._mentorList);
    })
  }
}
