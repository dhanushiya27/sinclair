import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontCampusComponent } from './front-campus/front-campus.component';
import { FrontCourseComponent } from './front-course/front-course.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FrontContactComponent } from './front-contact/front-contact.component';
import { FrontFacilitiesComponent } from './front-facilities/front-facilities.component';
import { FrontTestimonialsComponent } from './front-testimonials/front-testimonials.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,FrontCampusComponent,FrontCourseComponent,CarouselComponent,FrontContactComponent,FrontFacilitiesComponent,FrontTestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
}