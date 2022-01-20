import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input () childname = 'childHere';
  @Output () childfunction: EventEmitter<String> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    
  }
  senddata() {
    
    let fname = 'sdpatel';
    this.childfunction.emit(fname);

  }


}
