import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MentorFormComponent } from '../../mentor-form/mentor-form.component';
import { MentorForm } from '../../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorListPresenterService {

  public mentorData$: Subject<MentorForm>;

  private delete: Subject<number>;
  public delete$: Observable<number>;

  
  constructor(private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.mentorData$ = new Subject();
  }

  onDelete(id: number){
    this.delete.next(id);
  }

  openOverlay(){
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(MentorFormComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    componentRef.instance.filterData.subscribe((data) => {
      this.mentorData$.next(data);
    })
  }
  
}
