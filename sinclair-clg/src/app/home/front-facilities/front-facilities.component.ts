import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-facilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-facilities.component.html',
  styleUrls: ['./front-facilities.component.scss']
})
export class FrontFacilitiesComponent {
  details=[
    {imageurl:"assets/images/library.png",heading:"World Class Library",para:"Sinclair's Library provides an exciting mix of student friendly learning and social spaces, computers and information technology, and traditional library resources in a single facility with a unique academic ambience."},
    {imageurl:"assets/images/basketball.png",heading:"Largest Play Ground",para:"  We offer GameTime playground equipment.They offered the first commercial available inclusive playgrounds and were leaders in the advent of custom, themed playgrounds."},
    {imageurl:"assets/images/cafeteria.png",heading:"Tasty and Healthy Food",para:" Sinclair Students who are in need of free food supplies can use multiple resources at Sinclair as well as partner resources to help them meet the daily essentials for food."}
  ]
}
