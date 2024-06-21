import { Component } from '@angular/core';
import { RacesComponent } from '../races/races.component';
import { RaceTypes } from '../race-types';
import { HeaderComponent } from '../header/header.component';
import { BookingComponent } from '../booking/booking.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-choices',
  standalone: true,
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.scss',
  imports: [RacesComponent, HeaderComponent, BookingComponent, FooterComponent],
})
export class ChoicesComponent {
  public races = RaceTypes;
}
