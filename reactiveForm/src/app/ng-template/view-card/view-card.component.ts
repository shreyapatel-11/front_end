import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  mode:string ='card';
  @ViewChild('cardTemplate') cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate:TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardTemplate);
  }

  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
 
   modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
  get template() {
 
    if(this.mode=="list") return this.listTemplate
    else{
      return this.cardTemplate
    }
  }

}
