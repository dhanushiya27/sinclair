import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-campus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-campus.component.html',
  styleUrls: ['./front-campus.component.scss']
})
export class FrontCampusComponent {
  campus=[
    {ImagePath:"assets/images/london.png",Heading:"LONDON" },
    {ImagePath:"assets/images/newyork.png",Heading:"NEW YORK" },
    {ImagePath:"assets/images/washington.png",Heading:"WASHINGTON" },
  ]
}
