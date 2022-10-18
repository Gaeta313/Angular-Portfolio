import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as progetti from '../../assets/progetti.json';
import { Progetto } from '../interfaces/progetto';

@Injectable({
  providedIn: 'root',
})
export class ProgettiService {
  progetti = new BehaviorSubject<Progetto[]>(Array.from(progetti));
  $progetti = this.progetti.asObservable();

  constructor() {}

  select(value: string) {
    if (value !== '0') {
      let filterd = Array.from(progetti).filter(
        (progetto) => progetto.linguage === value
      );
      this.progetti.next(filterd);
    } else {
      this.progetti.next(Array.from(progetti));
    }
  }

  getSource(linguage: string) {
    switch (linguage) {
      case 'JavaScript':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg';
      case 'TypeScript':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg';
      case 'Angular':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png';
      case 'jQuery':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1048px-JQuery-Logo.svg.png';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
    }
  }
}
