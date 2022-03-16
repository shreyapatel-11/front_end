import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/assesment-1/module/service/user.service';
import { User, UserEditDetails, UserForm } from '../mvp.model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  public userList$: Observable<User>
  public id!: string;

  constructor(private userContainerService:MvpService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userList$ =new Observable();
    this.id= this.activatedRoute.snapshot.params.id;

    if (this.id) {
      this.userList$ = this.userContainerService.getUserById(this.id);
    }
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
  editUser(data: UserEditDetails) {
    this.userContainerService.editUser(data.userForm, data.id).subscribe(
      (res) => {
        alert('User Edited Successfully')
        this.router.navigateByUrl('mvp/user')
      }
    )
  }
  deleteUser(id: number){
    this.userContainerService.deleteUser(id).subscribe((res) => {
      alert("user delete successfully");
    })
  }
}
