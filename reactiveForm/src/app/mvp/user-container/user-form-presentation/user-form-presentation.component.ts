import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserForm } from '../../mvp.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UserFormPresentationComponent implements OnInit {

  public userForm: FormGroup;

  @Input() 
  public set userData(value : User) {
    console.log(value);
    if(value){
      console.log(this.userForm);
      this.userForm.patchValue(value);
      this._userData = value;
    }
  }

  public get userData() : User{
    return this._userData;
  }
  
  @Output()  public add: EventEmitter<UserForm>;
  @Output() public edit: EventEmitter<UserForm>;

  private _userData !: User;

  constructor(private userFormPresenter: UserFormPresenterService, private router: Router) { 
    this.userForm = userFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.userFormPresenter.userFormData$.subscribe((res: UserForm) => {
      this.add.emit(res);
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userFormPresenter.onSubmit(this.userForm);
  }
}
