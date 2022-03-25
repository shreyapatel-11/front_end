// import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor } from '../../model/mentor.model';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss'],
  viewProviders: [MentorFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  @Input() public set mentorData(value : Mentor | null) {
    if(value){
      console.log(value);
      this.mentorForm.patchValue(value);
      this._mentorData = value;
      this.isEditMode = true;
    }
  }

  public get mentorData() : Mentor | null {
    return this._mentorData;
  }
  
  @Output() public add: EventEmitter<Mentor>;
  @Output() public edit: EventEmitter<Mentor>;

  public isEditMode: boolean = false;
  public mentorForm: FormGroup;
  private _mentorData: Mentor;

  constructor(private mentorFormPresenter: MentorFormPresenterService) { 
    this.mentorForm = this.mentorFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.mentorFormPresenter.mentorFormData$.subscribe((data: Mentor) => {
      // debugger
      if(this.isEditMode){
        this.edit.emit(data);
      }
      else{
        this.add.emit(data);
      }
    })
  }

  onSubmit(){
    this.mentorFormPresenter.onSubmit(this.mentorForm);
  }
}
