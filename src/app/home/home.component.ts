import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookingComponent } from '../booking/booking.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, BookingComponent, FooterComponent],
})
export class HomeComponent {}
