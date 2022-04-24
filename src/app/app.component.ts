import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { subtract } from 'lodash';

import { LoadingService } from './Services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  isLoading: boolean;

  constructor(private router: Router, private loading: LoadingService) {
    this.router.events.subscribe((e) => {
      this.checkLoadingState(e);
    });
  }

  checkLoadingState(e: any) {
    if (e instanceof NavigationStart) {
      this.loading.loadingEmitter.next(true);
    }
    if (
      e instanceof NavigationEnd ||
      e instanceof NavigationCancel ||
      e instanceof NavigationError
    ) {
      this.loading.loadingEmitter.next(false);
    }
  }

  ngOnInit() {
    this.loading.loadingObs.subscribe((res) => (this.isLoading = res));
  }
}
