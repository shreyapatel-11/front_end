import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MentorForm } from '../../model/mentor.model';
import { FilterFormPresenterService } from '../filter-form-presenter/filter-form-presenter.service';

@Component({
  selector: 'app-filter-form-presentation',
  templateUrl: './filter-form-presentation.component.html',
  styleUrls: ['./filter-form-presentation.component.scss'],
  viewProviders: [FilterFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormPresentationComponent implements OnInit {

  @Output() filterData: EventEmitter<MentorForm>;
  mentorForm: FormGroup;
  

  constructor(private filterFormPresenter: FilterFormPresenterService) { 
    this.mentorForm = filterFormPresenter.builForm();
    this.filterData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onApply(){
    // this.filterFormPresenter.onApply();
    this.filterData.emit(this.mentorForm.value);
    console.log(this.mentorForm.value);
  }

}
