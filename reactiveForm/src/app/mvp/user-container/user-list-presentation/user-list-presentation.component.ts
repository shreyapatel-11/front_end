import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../mvp.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {

  @Input() 
  public set userList(value : User[] | null) {
    if (value) {
      console.log(value);
      this._userList = value;
      this.userList1 = value;
    }
  }
   
  public get userList() : User[] | null{
    return this._userList;
  }

  public userList1 : User[];
  private _userList !: User[];

  @Output() public delete: EventEmitter<number>;
  @Output() public addUser: EventEmitter<User>;

  constructor(private userListPresenter: UserListPresenterService, private router: Router) { 
    this._userList = [];
    this.delete = new EventEmitter();
    this.addUser = new EventEmitter();
  }

  ngOnInit(): void {
     this.userListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })
  }

  onDelete(id: number){
    this.userListPresenter.onDelete(id);
  }
}
