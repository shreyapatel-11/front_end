import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/assesment-1/module/service/user.service';
import { User, UserForm } from '../mvp.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  public userList$: Observable<User[]>

  constructor(private userContainerService:MvpService, private router: Router) {
    this.userList$=new Observable();
   }

  ngOnInit(): void {
    // console.log("hello");
    this.userList$ = this.userContainerService.getUser();
  }
  addUser(data: User){
    this.userContainerService.addUserData(data).subscribe((res) => {
      alert("user added successfully")
      this.router.navigateByUrl('user');
    }
    )    
  }
  deleteUser(id: number){
    this.userContainerService.deleteUser(id).subscribe((res) => {
      alert("user delete successfully");
    })
  }
}
