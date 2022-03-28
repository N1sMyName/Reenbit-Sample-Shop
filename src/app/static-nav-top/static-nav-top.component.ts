import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { UrlSerializer } from '@angular/router';


@Component({
  selector: 'app-static-nav-top',
  templateUrl: './static-nav-top.component.html',
  styleUrls: ['./static-nav-top.component.sass'],
})
export class StaticNavTopComponent implements OnInit {
  categories: string[] = [
    'Electronics',
    'Foods',
    'Closes',
    'Skin and Care',
    'Toys',
    'Special nutrition',
    'Sports and Outdoor',
    'Books',
  ];
  constructor(public router:Router) {
    
  }
  breadCrumbsGenerator(url:string) {
    const urlParsed = url.split('/').filter(item => item !== '')
    return urlParsed
  }
  
  ngOnInit(): void {
    
  }
}
