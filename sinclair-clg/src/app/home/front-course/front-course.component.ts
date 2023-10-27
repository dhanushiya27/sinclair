import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-course.component.html',
  styleUrls: ['./front-course.component.scss']
})
export class FrontCourseComponent {
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
}
