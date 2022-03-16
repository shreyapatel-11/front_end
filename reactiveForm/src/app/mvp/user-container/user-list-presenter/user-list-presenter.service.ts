import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor() { 
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
  }

  onDelete(id: number){
    this.delete.next(id);
  }
}
