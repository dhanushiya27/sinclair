import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit{
  blogId:any;  
  blog:any;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit():void{
    this.blogId=this.activatedRoute.snapshot.paramMap.get('id')
  }
  get selectedBlog() {
    return this.blogs.find((blog) => blog.id === +this.blogId);
  }

    blogs=[
      {id:1,heading:"ACC 1100 - Survey of Accounting",para:" Survey of financial accounting for non-accounting majors. Accounting concepts, financial statements, internal control, cash, and payroll.",heading1:" ACC 1210 - Introduction to Financial Accounting",para1:"  An introduction to preparation and use of accounting reports for business entities; focus on uses of accounting for external reporting, emphasizing accounting as a provider of financial information. Traditional testing (proctored or in Testing Center) is used in all online sections.", heading2:" ACC 1220 - Introduction to Managerial Accounting",para2:"An introduction to the use of accounting information by managers. Topics include the use of accounting information for planning and control, performance evaluation, decision-making and the statement of cash flows, along with financial statement analysis. Traditional testing (proctored or in Testing Center) is used in all online sections. ",  heading3:" ACC 1410 - Computerized Accounting Systems",para3:" This course uses general ledger software and spreadsheets to record, report and analyze accounting information.", heading4:" ACC 2101 - Intermediate Accounting I",para4:" Development of accounting standards, conceptual framework of financial accounting. Review of the accounting cycle, preparation of income statement, statement of owner&apos;s equity, balance sheet, statement of cash flows and additional reporting issues. Time value of money, current asset and current liability accounting and reporting. It is strongly recommended that you complete ACC 1510 prior to registering for ACC 2101. However ACC 1510 may be taken concurrently."},
      {id:2,heading:"ALH 1001 - Introduction to Simulation in Healthcare",para:"  This course introduces students to the history of simulation, concepts in healthcare as applied to simulation interprofessional education, and trends in simulation. Students will be introduced to simulation equipment, healthcare equipment, supplies and environments.",heading1:"ALH 1102 - Basic Healthcare Practices & Medical Scribe",para1:" Orientation to safe and effective basic health care practice including medical scribe, community health worker, patient assessment and documentation, infection control, body mechanics, and environmental safety considerations. Two classroom, two lab hours per week. ", heading2:" ALH 1101 - Introduction to Healthcare Delivery",para2:" Orientation to the health care delivery system, including history, economics, medical/legal issues, professionalism, ethics, sociological aspects and wellness concepts. Orientation to the use of technology in the health care system will also be provided, including user interfaces, telecommunications and networks. The development of health care team skills, including critical thinking and problem-solving  strategies and multicultural health care perspectives, will be presented. One classroom, three lab hours per week. ",  heading3:" ALH 1103 - Test Taking Strategies",para3:" This course provides strategies and techniques to maximize individual test performance through prioritized learning and focused study time for the Health Sciences programs. Test-taking strategies and techniques are presented using simulated testing situations. Techniques learned will help improve thinking and discrimination skills to enhance test performance.", heading4:"ALH 1105 - Overview of Holistic Health",para4:" Holistic models of health and wellness; value of integrating holistic models in traditional healthcare settings; overview of specific holistic health models such as aromatherapy, reflexology, guided imagery, supplements, and neuro linguistic programming; efficacy data; indications and contraindications."},
      {id:3,heading:"AFR 1100 - African American Studies",para:"Social science introduction to the origins, relevance and scope of African American Studies. Topics include African American history, religion, sociology, politics, economics and psychology within a multicultural context.",heading1:"AFR 1197 - Special Topics",para1:" Varied content offering of special interest to the discipline but not covered within existing courses; may be scheduled in a classroom/seminar setting or in nontraditional format.",heading2:"AFR 1100 - African American Studies",para2:"Social science introduction to the origins, relevance and scope of African American Studies. Topics include African American history, religion, sociology, politics, economics and psychology within a multicultural context.",heading3:"AFR 2297 - Special Topics",para3:" Varied content offering of special interest to the discipline but not covered within existing courses; may be scheduled in a classroom/seminar setting or in nontraditional format.",heading4:"AFR 2297 - Special Topics",para4:" Varied content offering of special interest to the discipline but not covered within existing courses; may be scheduled in a classroom/seminar setting or in nontraditional format."},
      {id:4,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:5,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:6,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:7,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:8,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:9,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",},
      {id:10,heading:"",para:"",heading1:"",para1:"",heading2:"",para2:"",heading3:"",para3:"",heading4:"",para4:"",}
    ]
}
