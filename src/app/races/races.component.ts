import { Component, Input } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

import { NgClass } from '@angular/common';

import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races',
  standalone: true,
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss',
  imports: [CardComponent, CurrencyPipe, NgClass],
})
export class RacesComponent {
  @Input({ required: true }) img!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) price!: number;

  isSelected = false;

  constructor(private router: Router) {}

  get imgPath() {
    return 'assets/' + this.img;
  }

  selectTime() {
    this.isSelected = !this.isSelected;
  }

  onBook() {
    this.router.navigate(['/confirmation']);
  }
}
