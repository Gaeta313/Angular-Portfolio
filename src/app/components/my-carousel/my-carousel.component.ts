import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Progetto } from 'src/app/interfaces/progetto';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.scss'],
})
export class MyCarouselComponent implements OnInit, AfterViewInit {
  @Output() setImage: EventEmitter<any> = new EventEmitter();
  @Input() progetto!: Progetto;
  @ViewChild('slide') slide!: ElementRef<HTMLDivElement>;
  @ViewChild('slidesContainer') slideContainer!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  prevClick() {
    const slideWidth = this.slide.nativeElement.clientWidth;
    this.slideContainer.nativeElement.scrollLeft -= 4 * slideWidth;
  }

  nextClick() {
    const slideWidth = this.slide.nativeElement.clientWidth;
    this.slideContainer.nativeElement.scrollLeft += 4 * slideWidth;
  }

  onClick(image: string) {
    this.setImage.emit(image);
  }
}
