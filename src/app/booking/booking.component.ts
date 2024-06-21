import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  currentDate = new Date().toISOString().slice(0, 10);

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      date: new FormControl(this.currentDate, Validators.required),
      adults: new FormControl(null, [Validators.required, Validators.min(1)]),
      children: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  onSubmit() {
    const { date, adults, children } = this.bookingForm.value;

    if (!this.bookingService.search(date, adults, children)) {
      alert('Please enter the form below first :)');
    }
  }
}
