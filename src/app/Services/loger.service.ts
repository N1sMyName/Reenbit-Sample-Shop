import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogerService {
  hideFooter: boolean = this.active.snapshot.data['hideFooter'];
  constructor(private active: ActivatedRoute) {}
}
