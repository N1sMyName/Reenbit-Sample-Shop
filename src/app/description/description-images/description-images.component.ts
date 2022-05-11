import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-description-images',
  templateUrl: './description-images.component.html',
  styleUrls: ['./description-images.component.sass'],
  encapsulation: ViewEncapsulation.None,
 
})
export class DescriptionImagesComponent implements OnInit {
  constructor() {}
  @Input() product: Product;
  images: GalleryItem[];

  ngOnInit(): void {
    console.log(this.product);
    this.images = [
      new ImageItem({ src: this.product.imgURL }),
      new ImageItem({ src: this.product.imgURL }),
      new ImageItem({ src: this.product.imgURL }),
    ];
  }
}
