import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from 'src/app/components/single-card/single-card.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCarouselComponent } from 'src/app/components/my-carousel/my-carousel.component';



@NgModule({
  declarations: [SingleCardComponent,ModalComponent,MyCarouselComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [SingleCardComponent,ModalComponent,MyCarouselComponent],
})
export class SahredModule { }
