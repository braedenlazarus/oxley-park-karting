import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private router: Router) {}

  search(date: Date, adults: number, children: number): boolean {
    if (date !== new Date() && (adults > 0 || children > 0)) {
      this.router.navigate(['/booking']);
      return true;
    }
    return false;
  }
}
