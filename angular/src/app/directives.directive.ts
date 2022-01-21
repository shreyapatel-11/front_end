import { Directive,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})

export class DirectivesDirective {

  @HostBinding('style.backgroundColor') bgcolor:string="";
  @HostBinding('style.color') color:string="";

  @HostListener('click') setMouseEnter() {
    this.bgcolor = "red";
    this.color = "white";
    alert(this.color)
  }

  @HostListener('mouseleave') setMouseLeave() {
    this.bgcolor = "yellow";
    this.color = "black"
  }

  ngOnInit(){
    this.bgcolor = "yello";
  }
  constructor() { }

}
