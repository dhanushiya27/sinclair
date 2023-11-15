import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(FrontCourseComponent) courseComponent!: FrontCourseComponent;
  details = [
    { imageurl: 'assets/images/library.png', heading: 'World Class Library', para: "Sinclair's Library provides an exciting mix of student-friendly learning and social spaces, computers and information technology, and traditional library resources in a single facility with a unique academic ambience." },
    { imageurl: 'assets/images/basketball.png', heading: 'Largest Play Ground', para: 'We offer GameTime playground equipment. They offered the first commercially available inclusive playgrounds and were leaders in the advent of custom, themed playgrounds.' },
    { imageurl: 'assets/images/cafeteria.png', heading: 'Tasty and Healthy Food', para: 'Sinclair Students who are in need of free food supplies can use multiple resources at Sinclair as well as partner resources to help them meet the daily essentials for food.' }
  ];
  // @ContentChild(FrontFacilitiesComponent) facilities: FrontFacilitiesComponent | undefined;
  // @ViewChild('campusComponent') campusComponent!: FrontCampusComponent;
  fcourse=[
    {
      Title :"Associate Degree",
      Content:"At Sinclair Community College, there are three types of degree programs offered: university parallel programs, career programs, and individualized degree programs."
    },
    {
      Title :"Bachelor's Degree",
      Content:" In keeping with our commitment to meeting the ever-changing workforce needs of the community, Sinclair Community College is proud to now offer bachelor's degree programs."
    },
    {
      Title :"Post Graduation",
      Content:"Sinclair Community College provides a variety of online learning options for you to supplement and/or replace the traditional on-campus classroom experience."
    },
   ]
  ngOnInit(){
    window.scroll(0,0);
  }
}