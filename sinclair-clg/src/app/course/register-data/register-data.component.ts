import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from "primeng/multiselect";
import { FilterPipe } from "src/app/pipes/filter.pipe";

@Component({
  selector: 'app-register-data',
  standalone: true,
  imports: [CommonModule,TableModule,MultiSelectModule,FilterPipe],
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent {

  @Input() formData:any;
  @Input() courses:any;
  @Output() removeItemFromParent = new EventEmitter<any>();
  @Output() editItemEvent = new EventEmitter<any>();
  selectedCourses: any;
  filteredDataLength: any;
//   courses: any[] = [
//     {name:'Astronomy'},
//    {name:'Microbiology'},
//    {name:'Hospitality Management'},
//    {name:'Pathophysiology'},
//    {name:'Africana Studies'},
//    {name:'Accounting'},
//    {name:'Visual Communications'},
//    {name:'Mathematics and Engineering'},
//    {name:'Law'},
//    {name:'Mathematics'}
// ];
  
  updateSelectedCourses(selectedCourses: any[]): void {
  this.selectedCourses = selectedCourses;
  this.calculateFilteredDataLength();
  }
  // removeItem(formValues:any){
  //   this.removeItemFromParent.emit(formValues); 
  // }
  calculateFilteredDataLength() {
    this.filteredDataLength = this.formData.filter((item: any)=> {
      for (const course of this.selectedCourses) {
        if (item.courses.some((itemCourse:any) => itemCourse.name === course.name)) {
          return true;
        }
      }
      return false;
    });
  }
  // editItem(formValue: any) {
  //   formValue.editing = true;
  //   this.editItemEvent.emit(formValue);
  // }
  // sortDataAlphabetically() {
  //   this.formData.sort((a: { fname: string }, b: { fname: string }) => a.fname.localeCompare(b.fname));
  // }
  sortDataAlphabetically(ascending: boolean = true) {
    this.formData.sort((a: { fname: string }, b: { fname: string }) => {
      const comparison = a.fname.localeCompare(b.fname);
      return ascending ? comparison : -comparison;
    });
  } 
}