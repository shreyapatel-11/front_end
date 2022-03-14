import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/crud.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employee: Employee[];
  constructor(private cs: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(id: number): void {
    console.log(this.cs.getById(id));
  }

  getEmployees(): Employee[] {
    return this.cs.getData();
  }
  editEmployee(id: number): void {
    this.router.navigateByUrl(`/crud-practice/edit/${id}`);
  }
  deleteEmployee(id: number): void {
    this.cs.deleteData(id);
  }
}
