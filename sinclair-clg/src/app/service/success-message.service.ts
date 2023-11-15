import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {
  private successMessage = new BehaviorSubject<string | null>(null);
  successMessage$ = this.successMessage.asObservable();
  // coursedata: any;

  showSuccessMessage(message: string) {
    this.successMessage.next(message);
  }
  closeMessage() {
    this.successMessage.next(null);
  }
  likeCourse(course: any) {
    course.numberoflikes += 1;
  }
}

