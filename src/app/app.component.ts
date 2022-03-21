import { Component } from '@angular/core';
import { LogerService } from './Services/loger.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private loger:LogerService){}
  

  
  ngOnInit() {
  
  }

}
