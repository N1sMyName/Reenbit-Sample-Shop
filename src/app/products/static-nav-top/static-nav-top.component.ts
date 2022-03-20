import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-nav-top',
  templateUrl: './static-nav-top.component.html',
  styleUrls: ['./static-nav-top.component.sass'],
})
export class StaticNavTopComponent implements OnInit {
  pathname = window.location.pathname.slice(1)
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
  constructor() {}

  ngOnInit(): void {}
}
