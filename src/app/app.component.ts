import { Component } from '@angular/core';
import {
  Router,
} from '@angular/router';

import { LoadingService } from './Services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  isLoading: boolean;

  constructor(private router: Router, public loading: LoadingService) {
    this.router.events.subscribe((e) => {
      this.loading.checkLoadingState(e);
      
    });
  }

 

  ngOnInit() {
    this.loading.loadingObs.subscribe((res) => (this.loading.isLoading = res));
  }
}
