import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { SuccessMessageService } from '../service/success-message.service';
import { PaginatorModule } from "primeng/paginator";
import { RegisterComponent } from './register/register.component';


interface PageEvent {
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule,RouterModule,PaginatorModule,RegisterComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  showDetails: boolean[] = [];
  searchQuery: string = '';
  filteredCourses: any[] = [];
  coursedata =[
    {
      Title:"Accounting",
      Desc:"Survey of financial accounting for non-accounting majors. Accounting concepts, financial statements, internal control, cash, and payroll.Survey of financial accounting for non-accounting majors. Accounting concepts, financial statements.",
      expdesc:" Division: Business and Public Services Department: Accounting Repeatable Credit: No Offered Online: Yes Prereqs: NONE"
    },
    {
      Title:"Africana Studies",
      Desc:"Social science introduction to the origins, relevance and scope of African American Studies. Topics include African American history, religion, sociology, politics, economics and psychology within a multicultural context.",
      expdesc:"Division: Liberal Arts, Communication and Social Sciences Department: Africana Studies Repeatable Credit: No Offered Online: Yes Prereqs: NONE",
    },
    {
      Title:"Pathophysiology",
      Desc:"Study of human disease using a system approach emphasizing abnormal physiological processes that result in the signs and symptoms of each disorder. Traditional testing (proctored or in Testing Center) is used in all online sections.",
      expdesc:"Division: Health Sciences Department: Allied Health Repeatable Credit: No Offered Online: Yes Prereqs: BIO 1107 OR BIO 1121 OR BIO 1141 OR BIO 2211",
    },
    {
      Title:"Astronomy",
      Desc:" Lab and field activities to supplement Stars, Galaxies & the Universe. Three lab hours per week.Lab and field activities to supplement Stars, Galaxies & the Universe. Three lab hours per week.Lab and field activities to supplement Stars, Galaxies.",
      expdesc:"Division: Science, Mathematics and Engineering Department:Astronomy Repeatable Credit: No >Offered Online: Yes Prereqs: NONE",
    },
    {
      Title:"Microbiology",
      Desc:" Morphology and physiology of microorganisms and selected human parasites, mechanisms of disease production, host responses, spread of infectious diseases. Three classroom, three lab hours per week.",
      expdesc:"Division: Science, Mathematics and Engineering Department: Biology Repeatable Credit: No Offered Online: Yes Prereqs:BIO 1107 OR BIO 1111 OR BIO 1141 OR BIO 1121 OR BIO 1171",
    },
    {
      Title:"Hospital Management",
      Desc:"This course is designed to provide students with the principles of supervision in the hospitality and tourism industry and the associated responsibilities. Topics include managing resources,team building.",
      expdesc:"Division: Science, Mathematics and Engineering Department: Biology Repeatable Credit: No Offered Online: Yes Prereqs:BIO 1107 OR BIO 1111 OR BIO 1141 OR BIO 1121 OR BIO 1171",
    },
    {
      Title:"Philosophy",
      Desc:"Basic nature of philosophy, its relationship to physical and social sciences and theology and its value to the individual.relationship to physical and social sciences and theology relationship to physical and ",
      expdesc:"Division: Liberal Arts, Communication and Social Sciences Department: Philosophy Repeatable Credit: No Offered Online: Yes Prereqs: NONE  ",
    },
    {
      Title:"Spanish",
      Desc:"Foundation for understanding, speaking, reading and writing Spanish. Work outside of class and/or in the language laboratory is required.Reviews and extends basic principles through composition and conversation.",
      expdesc:"Division: Liberal Arts, Communication and Social Sciences Department: Spanish Repeatable Credit: No Offered Online: Yes Prereqs: SPA 1102 ",
    },
    {
      Title:"Visual Communication",
      Desc:"History of graphic design covering major designers and their work, as well as design movements. From the origins of graphic art including printing and typography through the rise of the Internet, this course will explore.",
      expdesc:"Division: Liberal Arts, Communication and Social Sciences Department: Design Repeatable Credit: No Offered Online: Yes Prereqs: DEV 0035 ",
    },

  ] 
    first: number = 0;
    rows: number = 6;
    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
  constructor(private router: Router,private likeService:SuccessMessageService) {
    this.showDetails = new Array(this.coursedata.length).fill(false);
    console.log(this.showDetails);
    this.filteredCourses = this.coursedata;
  }
  ngOnInit() {
    window.scroll(0,0);
  }

toggleDetails(index: number) {
  this.showDetails[index] = !this.showDetails[index];
}
// this.showDetails[2] = false ;
// this.showDetails[2] = !false ; //true
filterCourses() {
  if (!this.searchQuery) {//watever is typed in search box is called search query
     this.filteredCourses = this.coursedata;//val which we type will trigger  filterCourses()
  } else {
     this.filteredCourses =this.coursedata.filter((course) =>{
      return course.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
     }
    );
  }
 }
 isLiked(course: any): boolean {
  return this.likeService.getLikes(course.Title) > 0; 
}
toggleLike(course: any) {
  this.likeService.likeCourse(course.Title);
}
getLikes(courseTitle: string): number {
  return this.likeService.getLikes(courseTitle); 
}
}
