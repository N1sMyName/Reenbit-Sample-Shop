import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  loadingEmitter = new BehaviorSubject(false)
  loadingObs = this.loadingEmitter.asObservable()
  constructor() { }
}
