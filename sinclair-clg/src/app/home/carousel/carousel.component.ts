import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,  CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  cards: any[] = [
    {imageUrl:"assets/imgs/img1.jpg",title: 'October 3,2023', content: ' — Sinclair Community College has received more than $646,000 in grant funding from the National Science Foundation (NSF) to use game-based learning to enhance cybersecurity technician training. Sinclair Community College Professor of Computer Science and Information  ...',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-receives-federal-grant-to-teach-cybersecurity-through-innovative-game'},
    {imageUrl:"assets/imgs/img2.jpg",title: 'September 27,2023', content: ' — Sinclair Community College has been selected to host a Fulbright Scholar-in-Residence from Ethiopia during the 2023-2024 academic year.&nbsp; Dr. Abebayehu Desalegn, an expert in biological sciences at Wolaita Sodo University in Ethiopia, was selected for  ...',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-welcomes-visiting-fulbright-scholar-in-residence'},
    {imageUrl:"assets/imgs/img3.jpg",title: 'September 13,2023', content: ' — The Sinclair Community College Art Department is pleased to present work by Rachel Abrams and Christina Humble in the Burnell R. Roberts Triangle Gallery and fiber work by Katrina Majkut in the Works on Paper  ...',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-presents-artwork-by-rachel-abrams-christina-humble-katrina-majkut'},
    { imageUrl:"assets/imgs/img4.jpg",title: 'September 6,2023', content: ' — Sinclair Community College has been selected to join a new national center focused on creating and scaling up the high-demand training needed to fuel the country’s technology-enabled economic growth. The National Information Technology Innovation Center (NITIC)  ...',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-selected-to-join-national-information-technology-innovation-center'},
    {imageUrl:"assets/imgs/img5.jpg",title: 'August 29,2023', content: ' — Sinclair Community College welcomed State of Ohio Representatives Andrea White and Phil Plummer and leadership from the Ohio Association of Community Colleges (OACC) to the Dayton campus on Tuesday, August 29, 2023, to learn more  ...',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-hosts-state-legislators-to-showcase-state-of-the-art-facilities-and-efforts-to-build-a-skilled-workforce'},
    {imageUrl:"assets/imgs/img6.jpg",title: 'August 23,2023', content: '  — Sinclair Community College is beginning the 2023-2024 academic year on Monday, August 21, 2023, with an increase in enrollment over last fall and new degrees and certificates, including two new bachelor’s degrees.',linkUrl:'https://www.sinclair.edu/news/article/sinclair-community-college-begins-2023-2024-academic-year-with-more-students-and-new-bachelors-degrees'}
  ];
}
