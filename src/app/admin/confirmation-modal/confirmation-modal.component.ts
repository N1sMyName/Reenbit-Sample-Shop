import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class ConfirmationModalComponent implements OnInit {

  constructor(public admin:AdminService) { }
  @Input()msg:string
  @Input()showButton = true

  ngOnInit(): void {
    console.log()
  }

  handleToggle(){
    
  }

}
