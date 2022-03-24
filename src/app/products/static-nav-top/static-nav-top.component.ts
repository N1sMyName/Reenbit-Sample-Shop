import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  constructor() {}

  ngOnInit(): void {}
}
