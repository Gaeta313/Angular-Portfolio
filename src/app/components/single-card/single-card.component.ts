import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Progetto } from 'src/app/interfaces/progetto';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() progetto!: Progetto;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(progetto: Progetto) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });

    modalRef.componentInstance.progetto = progetto;
  }
}
