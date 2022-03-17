import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-list-sibling',
  templateUrl: './list-sibling.component.html',
  styleUrls: ['./list-sibling.component.scss']
})
export class ListSiblingComponent implements OnInit {
  
  userName: string;

  
  constructor(private siblingService: SiblingService) { 
    this.siblingService.userName.subscribe(uName => {
      this.userName = uName;
    })
  }

  ngOnInit(): void {
  }

}
