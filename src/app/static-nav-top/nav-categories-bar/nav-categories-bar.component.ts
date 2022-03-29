import { Component, OnInit, OnChanges } from '@angular/core';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { Category } from '../../Services/db/categories.model';
@Component({
  selector: 'app-nav-categories-bar',
  templateUrl: './nav-categories-bar.component.html',
  styleUrls: ['./nav-categories-bar.component.sass'],
})
export class NavCategoriesBarComponent implements OnInit {
  public categories: Category[];

  public categoriesClassList = { 'categories-container': true, hidden: true };

  constructor(private api: MimicrestService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  showCategory(elemRef: HTMLDivElement) {
    let initial = elemRef.getAttribute('class')?.split(' ');
    // remove if exist
    if (initial?.includes('hidden')) {
      let res = initial.filter((e) => e !== 'hidden');
      elemRef.setAttribute('class', res.toString());
    } else {
      // add if not
      initial?.push('hidden');
      let res = initial?.toString().replace(',', ' ');
      // checking for undefined and null
      if (res) {
        elemRef.setAttribute('class', res);
      }
    }
  }
  hideCategories() {}

  ngOnChanges(): void {
    console.log('trigered chanb');
  }
}
