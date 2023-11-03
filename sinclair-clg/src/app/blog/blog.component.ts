import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  bleft=[
    {con:"Certificate programs are academic programs of study designed to prepare students for a particular career area, but not at the level required for an associate degree. There are general certificate programs and short term technical certificates."},
    {con:"The technical certificates are much more industry focused and designed for workforce preparation.These academic programs are often less credit-intensive than other certificates because they are strictly focused on a particular job or vocational area."},
    {con:"The certificates listed below are meant to prepare students for a job or vocational area. These programs often require more credit hours than the short-term technical counterparts. This is because a more well-rounded career training outcome, including more than just the technical training is accomplished."}
  ]
  blogs=[
    {id:1,title:"Accounting",timing:"9 Hours"},
    {id:2,title:"Allied Health",timing:"22 Hours"},
    {id:3,title:"Africana Studies",timing:"3 Hours"},
    {id:4,title:"Machine Learning",timing:"18 Hours"},
    {id:5,title:"Computer Science",timing:"28 Hours"},
    {id:6,title:"Dental Assisting",timing:"5 Hours"},
    {id:7,title:"Economics",timing:"6 Hours"},
    {id:8,title:"Hospitality Management",timing:"14 Hours"},
    {id:9,title:"Humanities",timing:"9 Hours"},
    {id:10,title:"Law",timing:"11 Hours"},
  ]
  postCat=[
    {title:"Commerce",timing:"17 Hours"},
    {title:"Business Analytics",timing:"20 Hours"},
    {title:"Data Science",timing:"28 Hours"},
    {title:"Journalism",timing:"22 Hours"},
    {title:"AutoCAD",timing:"41 Hours"},
  ]
  constructor(private router:Router){}
  ngOnInit() {
    window.scroll(0,0);
  }
  // onEdit(){
  //   console.log("hiiiii");
  //   this.router.navigate(["blogContent"])
  // }
  onEdit(blogId: number) {
    this.router.navigate(["blogContent", blogId]);
  }
}
