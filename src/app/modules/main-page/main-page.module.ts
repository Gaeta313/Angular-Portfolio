import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ProgettiComponent } from 'src/app/components/progetti/progetti.component';
import { SahredModule } from '../sahred/sahred.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainPageComponent, ProgettiComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SahredModule,
    FormsModule,
    NgbModule
  ]
})
export class MainPageModule { }
