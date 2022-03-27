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

  constructor(){
    
    setTimeout(()=>{
      this.bindingProperty = true;
    },3000);
  }
  onEventBinding(){
    this.eventBinding = 'Event binding occured!';
  }
}
