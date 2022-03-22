import { Component, OnInit } from '@angular/core';
import { LogerService } from 'src/app/Services/loger.service';
import * as staticData from './staticData'
@Component({
  selector: 'app-static-nav-bot',
  templateUrl: './static-nav-bot.component.html',
  styleUrls: ['./static-nav-bot.component.sass'],
})
export class StaticNavBotComponent implements OnInit {
  
  constructor(private log: LogerService) {}
  staticData = staticData
  ngOnInit(): void {
    
  }
}
