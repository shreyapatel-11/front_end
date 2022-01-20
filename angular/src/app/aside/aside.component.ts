import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'] 
})
export class AsideComponent implements OnInit {

  name : string='Shreya';
  constructor() { }

  ngOnInit(): void {
  }

}
