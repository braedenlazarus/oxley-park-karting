import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  @Input({ required: true }) email!: string;

  constructor(private router: Router) {}

  onClickHome() {
    this.router.navigate(['/home']);
  }
}
