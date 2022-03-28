import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../Services/db/categories.model';
import { MimicrestService } from '../Services/mimicrest.service';


@Component({
  selector: 'app-static-nav-top',
  templateUrl: './static-nav-top.component.html',
  styleUrls: ['./static-nav-top.component.sass'],

})
export class StaticNavTopComponent implements OnInit {
  categories: Category[];
  constructor(public router:Router,private api:MimicrestService) {
    
  }
  breadCrumbsGenerator(url:string) {
    const urlParsed = url.split('/').filter(item => item !== '')
    return urlParsed
  }
  
  ngOnInit(): void {
    this.api.getCategories().subscribe((res)=> {
      this.categories = res
    })
  }
}
