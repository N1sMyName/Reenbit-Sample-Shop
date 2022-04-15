import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogerService } from 'src/app/Services/loger.service';
import * as staticData from './staticData'
@Component({
  selector: 'app-static-nav-bot',
  templateUrl: './static-nav-bot.component.html',
  styleUrls: ['./static-nav-bot.component.sass'],
})
export class StaticNavBotComponent  {
  
  constructor(private log: LogerService,public route:Router,public active:ActivatedRoute) {}
  staticData = staticData
  ngOnInit(): void {
      
  }
}
