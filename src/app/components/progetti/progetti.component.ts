import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Progetto } from 'src/app/interfaces/progetto';
import { ProgettiService } from 'src/app/services/progetti.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit,OnDestroy {

  progetti!: Observable<Progetto[]>

  constructor(private progettiSrv: ProgettiService, ) { }

  ngOnInit(): void {
   this.progetti = this.progettiSrv.$progetti
  }

  onSelect(e: any){
    this.progettiSrv.select(e.target.value);
  }



  ngOnDestroy(): void {
  }

}
