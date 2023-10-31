import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessMessageService } from '../service/success-message.service';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent {
  successMessage$ = this.successMessageService.successMessage$;

  constructor(private successMessageService: SuccessMessageService) {}

  closeMessage() {
    this.successMessageService.closeMessage();
  }
}
