import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-testimonials.component.html',
  styleUrls: ['./front-testimonials.component.scss']
})
export class FrontTestimonialsComponent {
  review=[
    {url:"assets/images/user1.jpg",content:" So far my experience has been good, I took classes here as a high school student as well. I like the option to take online classes however as full time working adult I wish they offered full time online so it was easier for those who do have to work full time jobs and go to school.",head:"Christine Berkley"},
    {url:"assets/images/user2.jpg",content:"Sinclair has helped me during a career change. They have low cost tuition and classes in the evenings. Going to Sinclair I was able to get an internship at the county in Environmental Services.",head:"David Byer"}
   ]
}
