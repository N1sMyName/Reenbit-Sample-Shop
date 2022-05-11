import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionImagesComponent } from './description-images/description-images.component';
import { DescriptionInfoComponent } from './description-info/description-info.component';
import { DescriptionRelevantTabComponent } from './description-relevant-tab/description-relevant-tab.component';
import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { CoreModule } from '../core.module';
import { RedirectModalComponent } from './redirect-modal/redirect-modal.component';
import { GalleryModule} from 'ng-gallery';




@NgModule({
  declarations: [
    DescriptionImagesComponent,
    DescriptionInfoComponent,
    DescriptionRelevantTabComponent,
    DescriptionComponent,
    RedirectModalComponent,
    
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    CoreModule,
    GalleryModule,
   
    
    
    
   
  ],
})
export class DescriptionModule {}
