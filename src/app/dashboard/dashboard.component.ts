import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookingComponent } from '../booking/booking.component';

import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [HeaderComponent, BookingComponent, DecimalPipe],
})
export class DashboardComponent {
  public clicked: boolean = false;
  public totalLapTimeSec!: number;
  public lapTimeMins!: number;
  public lapTimeSec!: number;

  onClick(): void {
    this.clicked = true;

    this.totalLapTimeSec = Math.random() * (90 - 50) + 50;
    this.lapTimeMins = Math.floor(this.totalLapTimeSec / 60);
    this.lapTimeSec = this.totalLapTimeSec % 60;
  }
}
