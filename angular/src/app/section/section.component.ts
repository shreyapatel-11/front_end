import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  reactiveForm: FormGroup | undefined;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'gender': new FormControl(null),
      'interest': new FormControl(null),
    });
  }

  profileForm = new FormGroup({

  })
  

  @Input () childname = 'childHere';
  @Output () childfunction: EventEmitter<String> = new EventEmitter();

  constructor() { }


  onClick(){
    const msgService = new ServicesService();
    msgService.messageAlert()
  }
  /**
   * onSubmit
   */
  onSubmit(){
    console.log('submit works')
  }
  senddata() {
    
    let fname = 'sdpatel';
    this.childfunction.emit(fname);

  }
  messageAlert(){
    
  }


}
