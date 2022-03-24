import { Component } from '@angular/core';
import { LogerService } from './Services/loger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(public loger: LogerService) {}

  ngOnInit() {
    console.log(this.loger.hideFooter);
  }
}
