import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './sibling.model';

@Injectable({
  providedIn: 'root'
}) 
export class SiblingService {

  userName = new Subject<string>();

  public userData = new Subject<User>();

  public editData:Subject<User>;
  public editData$: Observable<User>;

  constructor() {
    this.userData = new Subject<User>();
    this.editData = new Subject<User>();
    this.editData$ = new Observable<User>();

    this.editData$ = this.editData.asObservable();
  }
  saveDatatoEdit(data:User){
    this.editData.next(data)
  } 
}
