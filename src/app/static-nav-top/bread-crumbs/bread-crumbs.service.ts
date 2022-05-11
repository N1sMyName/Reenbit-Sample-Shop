import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { BreadCrumb } from 'src/app/Services/db/breadCrumb.model';
import { uniqBy } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbsService {
  constructor(private router: Router) {
    this.routerEventListener();
  }
  private readonly _breadcrumbs$ = new BehaviorSubject<BreadCrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  addBreadCrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: BreadCrumb[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.data['breadCrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };
        breadcrumbs.push(breadcrumb);
        // console.log(breadcrumbs)
      }
      this.addBreadCrumb(route.firstChild!, routeUrl, breadcrumbs);
    }
  }
  private getLabel(data: Data) {
    return typeof data['breadCrumb'] === 'function'
      ? data['breadCrumb'](data)
      : data['breadCrumb'];
  }
  routerEventListener() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        // Construct the breadcrumb hierarchy
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: BreadCrumb[] = [];
        this.addBreadCrumb(root, [], breadcrumbs);
        // Emit the new hierarchy
        this._breadcrumbs$.next(uniqBy(breadcrumbs, 'label'));
      });
  }
}
