import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/Services/db/categories.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

@Component({
  selector: 'app-categories-drop-down',
  templateUrl: './categories-drop-down.component.html',
  styleUrls: ['./categories-drop-down.component.sass']
})
export class CategoriesDropDownComponent implements OnInit {

  constructor(private api:MimicrestService) { }
  @ViewChild('dropDownRef') dropDownRef:ElementRef; 
  public categories:Category[]
  ngOnInit(): void {
    this.api.getCategories().subscribe(res => this.categories = res)
  }
  showMenu(){
    this.dropDownRef.nativeElement.classList.toggle('invis')
  }
  showID(category:Category){
    console.log(category.id)
  }

}
