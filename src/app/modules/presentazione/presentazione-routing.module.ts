import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentazioneComponent } from './presentazione.component';

const routes: Routes = [{ path: '', component: PresentazioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentazioneRoutingModule { }
