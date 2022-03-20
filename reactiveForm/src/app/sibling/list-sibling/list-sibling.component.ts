import { Component, OnInit } from '@angular/core';
import { User } from '../sibling.model';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-list-sibling',
  templateUrl: './list-sibling.component.html',
  styleUrls: ['./list-sibling.component.scss']
})
export class ListSiblingComponent implements OnInit {
  
  // userName: string;

  filterData:User;
  public uData:User[] = [
    {
      id: 1,
      name: 'shreya',
      age: 21,
      gender: 'female',
    },
  ]
  constructor(private siblingService: SiblingService) { 
    // this.siblingService.userName.subscribe(uName => {
    //   this.userName = uName;
    // })  
  }

  ngOnInit(): void {
    this.siblingService.userData.subscribe(res => this.uData.push(res));
  }

  onEdit(id:number){
    this.filterData = this.uData[id-1];
    this.siblingService.editData.next(this.filterData);
  }

  onDelete(id:number){
    
  }
}
