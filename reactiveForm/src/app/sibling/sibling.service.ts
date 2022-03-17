import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../mvp/mvp.model';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  public userData = new Subject<User>();
  userName = new Subject<string>();
  constructor() { }
}
