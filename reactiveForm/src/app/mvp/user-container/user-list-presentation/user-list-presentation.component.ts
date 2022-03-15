import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../mvp.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
})
export class UserListPresentationComponent implements OnInit {

  private _userList : User[];

  @Input() 
  public set userList(value : User[]) {
    this._userList = value;
  }
   
  public get userList() : User[] {
    return this._userList;
  }
  
  constructor(private userListPresenter: UserListPresenterService, public router: Router) { }

  ngOnInit(): void {
  }

}
