import { Component,  } from '@angular/core';
import { LoadingService } from 'src/app/Services/loading.service';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { Category } from '../../Services/db/categories.model';
@Component({
  selector: 'app-nav-categories-bar',
  templateUrl: './nav-categories-bar.component.html',
  styleUrls: ['./nav-categories-bar.component.sass'],
})
export class NavCategoriesBarComponent  {

  public categories: Category[];

 

  constructor(private api: MimicrestService) {}

  
  ngOnInit(): void {
    this.api.categories().subscribe((res) => {
      this.categories = res;
    });
    
    
  }

 


 

}
