import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentazioneRoutingModule } from './presentazione-routing.module';
import { PresentazioneComponent } from './presentazione.component';
import { ProfiloComponent } from 'src/app/components/profilo/profilo.component';
import { CertificazioniComponent } from 'src/app/components/certificazioni/certificazioni.component';
import { HardSkillsComponent } from 'src/app/components/hard-skills/hard-skills.component';


@NgModule({
  declarations: [
    PresentazioneComponent, ProfiloComponent,CertificazioniComponent, HardSkillsComponent
  ],
  imports: [
    CommonModule,
    PresentazioneRoutingModule
  ]
})
export class PresentazioneModule { }
