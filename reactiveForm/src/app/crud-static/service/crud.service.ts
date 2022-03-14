import { Injectable } from '@angular/core';
import { Employee } from '../model/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  private data: Employee[] = [
    {
        id: 1,
        name: "Shreya",
        email: "shreya@gmail.com",
        company: "1Rivet"
    },
    {
        id: 2,
        name: "Nirali",
        email: "nirali@gmail.com",
        company: "1Rivet"
    },
    {
        id: 3,
        name: "Aayushi",
        email: "aayushi@gmail.com",
        company: "1Rivet"
    },
    {
        id: 4,
        name: "Maitry",
        email: "maitry@gmail.com",
        company: "ECFY"
    },
    {
        id: 5,
        name: "Ishika",
        email: "ishika@gmail.com",
        company: "ECFY"
    },
    {
        id: 6,
        name: "Viral",
        email: "viral@gmail.com",
        company: "1Rivet"
    },
    {
        id: 7,
        name: "Sushil",
        email: "sushil@gmail.com",
        company: "1Rivet"
    },
    {
        id: 8,
        name: "Tanmay",
        email: "tanmay@gmail.com",
        company: "1Rivet"
    },
    {
        id: 9,
        name: "Hrishi",
        email: "Hrishi@gmail.com",
        company: "1Rivet"
    },
    {
        id: 10,
        name: "Sneha",
        email: "sneha@gmail.com",
        company: "1Rivet"
    },
  ];

  getData(): Employee[]{
    return this.data;
  }

  getById(id: number): Employee | undefined {
    return this.data.find(
      (res) => {
        return res.id === id;
      }
    );
  }

  editData(id: number, newData: Employee): void {
    newData.id = id;
    this.data[this.data.findIndex((val) => id == val.id)] = newData;
  }
  deleteData(id: number): void{
    this.data.splice(this.data.findIndex((val) => id == val.id), 1)

  }
}
