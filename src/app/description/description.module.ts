import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionImagesComponent } from './description-images/description-images.component';
import { DescriptionInfoComponent } from './description-info/description-info.component';
import { DescriptionRelevantTabComponent } from './description-relevant-tab/description-relevant-tab.component';
import { DescriptionComponent } from './description.component';

@NgModule({
  declarations: [
    DescriptionImagesComponent,
    DescriptionInfoComponent,
    DescriptionRelevantTabComponent,
    DescriptionComponent,
  ],
  imports: [CommonModule],
})
export class DescriptionModule {}
