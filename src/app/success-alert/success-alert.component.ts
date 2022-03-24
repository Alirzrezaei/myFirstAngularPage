import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  successId:number = 10; 
  successStatus: string = 'Functional';

  constructor() { }

  ngOnInit(): void {
  }

  getSuccessStatus(){
    return this.successStatus;
  }
}
