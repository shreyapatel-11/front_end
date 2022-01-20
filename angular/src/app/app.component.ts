import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';

  Myname = 'Shreya Patel';
  Image = '../assets/img/download.png';

  // ngonInit(): void{}
  onClick(){
    console.log('Hello')
  }

  train = '';

  parentfunction(fname: any)
  {
    // console.log('Shreya');
    this.train = fname;
    
  }
  data: any;
}
