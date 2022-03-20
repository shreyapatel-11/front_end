import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './sibling.model';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  public userData = new Subject<User>();
  public editData = new Subject<User>();
  public deleteData = new Subject<User>();
  
  userName = new Subject<string>();
  constructor() {
    this.userData = new Subject<User>();
    this.editData = new Subject<User>();
    this.deleteData = new Subject<User>();
   }
  
}
