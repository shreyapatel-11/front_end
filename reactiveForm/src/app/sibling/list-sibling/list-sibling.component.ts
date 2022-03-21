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

 
  public editMode:boolean = false;

  public uData:User[] = [
    {
      id: 1,
      name: 'shreya',
      age: 21,
      gender: 'female',
    },
    {
      id: 2,
      name: 'shreya',
      age: 19,
      gender: 'female',
    },
    {
      id: 3,
      name: 'Honey',
      age: 18,
      gender: 'female',
    },
  ]
  userdata: User[] = [];
  activeId: number;
  constructor(private siblingService: SiblingService) { 
    // this.siblingService.userName.subscribe(uName => {
    //   this.userName = uName;
    // })  
  }

  ngOnInit(): void {
    this.siblingService.userData.subscribe((data) => {
      console.log(this.activeId)
      if (this.editMode) {
        this.uData[this.activeId] = data;
        this.editMode = false;
      } 
      else {
        this.uData.push(data);
        // console.log(data)
      }
    }); 
  }

  onEdit(id: number): void {
    this.siblingService.saveDatatoEdit(this.uData[id]);
    this.editMode = true;
    this.activeId = id;
  }
  
  updateUser(id: number, data: User): void {
    this.uData[this.uData.findIndex((val) => id == val.id)] = {...data, id: id};
  }


  onDelete(id:number){
    let index = this.uData.findIndex(x => x.id == id);
    this.uData.splice(index,1);
  }
}
