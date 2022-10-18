import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Progetto } from 'src/app/interfaces/progetto';
import { ProgettiService } from 'src/app/services/progetti.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() progetto!: Progetto;
  image!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private progettiSrv: ProgettiService,
    private router : Router
    ) {}

    ngOnInit(): void {
      this.image = this.progetto.bg;
    }

    onGetSource(linguage: string): string {
      return this.progettiSrv.getSource(linguage);
    }
    onOpen(link: string) {
      window.open(link, '_blank');
    }

    onSetImage($event: any) {
      this.image = $event;
    }

    navigateToInfo() {
      console.log('navigate')
    this.router.navigate(['InfoPage']);
    this.activeModal.close();
    }
  }
