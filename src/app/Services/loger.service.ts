import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogerService {

  hideFooter: boolean = this.route.snapshot.data['hideFooter'];

  hideFuter:boolean = this.route.snapshot.data['hideFooter']


  constructor(private route: ActivatedRoute) {}
}
