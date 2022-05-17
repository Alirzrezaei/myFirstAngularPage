import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alireza';

  bindingProperty = false;
  eventBinding = 'For event binding click on button!';
  serverCreated = false;

  constructor(){
    
    setTimeout(()=>{
      this.bindingProperty = true;
    },3000);
  }
  onEventBinding(){
    this.eventBinding = 'Event binding occured!';
    this.serverCreated = true;
  }
}
