import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-info',
  templateUrl: './description-info.component.html',
  styleUrls: ['./description-info.component.sass']
})
export class DescriptionInfoComponent implements OnInit {
  currentHeading = 1
  tabs = ['Description','Questions','Reviews']
  get heading(){
    return this.currentHeading
  }
  set heading(heading:number){
    this.currentHeading = heading
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
