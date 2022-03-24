import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MentorForm } from '../../model/mentor.model';
import { FilterFormPresentationComponent } from '../filter-form-presentation/filter-form-presentation.component';

@Injectable({
  providedIn: 'root'
})
export class MentorListPresenterService {

  public filterData$: Subject<MentorForm>;
 
  public filterdata: MentorForm;

  private delete: Subject<number>;
  public delete$: Observable<number>;

  
  constructor(private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.filterData$ = new Subject<MentorForm>();

  }

  onDelete(id: number){
    this.delete.next(id);
  }

  openOverlay(){
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    componentRef.instance.filterData.subscribe((data) => {
      this.filterData$.next(data);
      overlayRef.detach();
    });
  }
  
}
