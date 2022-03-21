import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogerService {
  hideFuter:boolean = this.route.snapshot.data['hideFuter']

    constructor(private route:ActivatedRoute ) { }
  
}
