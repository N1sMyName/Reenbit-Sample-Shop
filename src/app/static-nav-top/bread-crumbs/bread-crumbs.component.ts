import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BreadCrumb } from 'src/app/Services/db/breadCrumb.model';
import { BreadCrumbsService } from './bread-crumbs.service';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.sass'],
})
export class BreadCrumbsComponent implements OnInit {
  constructor(
    public router: Router,
    public activeR: ActivatedRoute,
    public breadCrumb: BreadCrumbsService
  ) {}
  breadCrumbs: BreadCrumb[] = [];
  counter: number = 0;
  id: number;
  
  unsubscribeAll = new Subject();
  ngOnInit() {
    this.breadCrumbsListener();
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }

  followCrumb(path: string ): void {
    this.router.navigateByUrl(path);
  }
  breadCrumbsListener() {
    this.breadCrumb.breadcrumbs$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((r) => (this.breadCrumbs = r));
  }
}
