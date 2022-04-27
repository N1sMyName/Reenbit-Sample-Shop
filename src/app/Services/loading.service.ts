import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false
  loadingEmitter = new BehaviorSubject(false)
  loadingObs = this.loadingEmitter.asObservable()
  checkLoadingState(e: any) {
    if (e instanceof NavigationStart) {
      this.loadingEmitter.next(true);
    }
    if (
      e instanceof NavigationEnd ||
      e instanceof NavigationCancel ||
      e instanceof NavigationError
    ) {
      this.loadingEmitter.next(false);
    }
  }
  constructor() { }
}
