import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alireza';

  bindingProperty = false;

  constructor(){
    
    setTimeout(()=>{
      this.bindingProperty = true;
    },3000);
  }
}
