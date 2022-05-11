import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.sass'],
})
export class BreadCrumbsComponent {
  constructor(public router: Router, public activeR: ActivatedRoute) {
    this.router.events.subscribe(e => {
     this.breadCrumbs = this.breadCrumbsParser(this.router.url)
    })
  }
  breadCrumbs: string[] = [];
  counter: number = 0;
  // ngDoCheck(): void {
  //   if (
  //     this.breadCrumbs.toString() !==
  //     this.breadCrumbsParser(this.router.url).toString()
  //   ) {
  //     this.breadCrumbs = this.breadCrumbsParser(this.router.url);
  //   }
  // }
  breadCrumbsParser(url: string) {
    const urlParsed = url.split('/').filter((item) => item !== '');
    return urlParsed;
  }

  followCrumb(chunk: string = 'products'): void {
    let route: string;
    if (Number.isNaN(+chunk)) {
      route = `/${chunk}`;
    } else {
      route = `/products/${chunk}`;
    }
    this.router.navigateByUrl(route);

    // this.router.navigateByUrl(route)
  }
  ngOnInit(){
    this.breadCrumbs = this.breadCrumbsParser(this.router.url);
  }

}
