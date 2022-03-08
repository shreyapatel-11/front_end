import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  @ViewChild('cardTemplate') cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate:TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardTemplate);
  }

}
