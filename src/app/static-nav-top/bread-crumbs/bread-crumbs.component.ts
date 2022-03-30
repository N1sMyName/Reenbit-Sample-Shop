import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.sass']
})
export class BreadCrumbsComponent  {

  constructor(public router:Router) { }
  breadCrumbs:string[] = []
  counter:number= 0 
  ngDoCheck(): void {
    if(this.breadCrumbs.toString() !== this.breadCrumbsParser(this.router.url).toString()){
      this.breadCrumbs = this.breadCrumbsParser(this.router.url)
    }
    
    
  }
  breadCrumbsParser(url:string) {
    const urlParsed = url.split('/').filter(item => item !== '')
    return urlParsed
  }

  followCrumb(chunk:string = 'products'):void{
    let route:string;
    if(Number.isNaN(+chunk)) {
       route = `/${chunk}`
       console.log(this.router.url)
    }else {
      route = `/products/${chunk}`
    }
    this.router.navigateByUrl(route)
    
     
    // this.router.navigateByUrl(route)
  }

}
