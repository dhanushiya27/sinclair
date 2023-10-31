import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {
  private likes: Record<string, number> = {};
  private successMessage = new BehaviorSubject<string | null>(null);
  successMessage$ = this.successMessage.asObservable();

  showSuccessMessage(message: string) {
    this.successMessage.next(message);
  }
  closeMessage() {
    this.successMessage.next(null);
  }
  likeCourse(courseTitle: string) {
    if (!this.likes[courseTitle]) {
      this.likes[courseTitle] = 1;
    } else {
      this.likes[courseTitle]++;
    }
  }
  getLikes(courseTitle: string): number {
    return this.likes[courseTitle] || 0;
  }
}

