import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.sass']
})
export class BreadCrumbsComponent implements OnInit {

  constructor(public router:Router) { }
  breadCrumbs:string[] = [] 
  ngOnInit(): void {
    this.breadCrumbs = this.breadCrumbsParser(this.router.url)
  }
  breadCrumbsParser(url:string) {
    const urlParsed = url.split('/').filter(item => item !== '')
    return urlParsed
  }

  followCrumb(chunk:string = 'products'):void{
    let route:string;
    if(Number.isNaN(+chunk)) {
       route = `/${chunk}`
    }else {
      route = `/products/${chunk}`
    }
    this.router.navigateByUrl(route)
     
    // this.router.navigateByUrl(route)
  }

}
