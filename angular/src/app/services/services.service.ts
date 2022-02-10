import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  messageAlert(){
    alert("Thanks for click");
  }
  constructor() { }
}
