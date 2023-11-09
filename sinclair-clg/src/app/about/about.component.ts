import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
showDetails: boolean = false;
about = 
  {
    Title: "The world's largest university",
    para: "Sinclair offers 300+ degree and certificate programs, including specialized and technical areas of study that are in high demand in the Dayton region. In the last four years, more than 26,000 credentials have been earned by Sinclair students.",
    extpara: "Sinclair offers course schedules and options, including online, to match your lifestyle. Credits easily transfer to four-year colleges and universities in Ohio and elsewhere, with more than 100 university transfer agreements that make it easy to transfer to advanced study. More than 3,500 students transfer every year from Sinclair.",
    nextpara:"With one of the lowest tuition rates in Ohio, Sinclair is committed to providing quality education and consistently ranks among the top community colleges in America. Sinclair's student-to-faculty ratio of nineteen-to-one is among the lowest at any Ohio college. On average, Sinclair students receiving associate degrees see an earnings increase from $22,000 to $38,000 in the first year after graduation. (Source: ODJFS and NSC data).",
    img:"assets/images/about.jpg"
  }
;
// @HostListener('click', ['$event.target'])
// onClick(target: HTMLElement) {
//   this.showDetails = !this.showDetails;
// }
myDetails() {
  this.showDetails= !this.showDetails;
}

ngOnInit(){
  window.scroll(0,0);
}

}
