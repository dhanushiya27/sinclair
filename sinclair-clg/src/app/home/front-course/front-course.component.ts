import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-course.component.html',
  styleUrls: ['./front-course.component.scss']
})
export class FrontCourseComponent {
  @Input() courseSections!: any[];
}
