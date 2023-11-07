import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from "primeng/multiselect";

@Component({
  selector: 'app-register-data',
  standalone: true,
  imports: [CommonModule,TableModule,MultiSelectModule],
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent {

  @Input() formData:any;
  @Input() courses:any;
  @Output() removeItemFromParent = new EventEmitter<any>();
  selectedCourses: any;
  filteredDataLength: any;
  @Output() editItemEvent = new EventEmitter<any>();
  
  updateSelectedCourses(selectedCourses: any[]): void {
  this.selectedCourses = selectedCourses;
  this.calculateFilteredDataLength();
  }
  removeItem(formValues:any){
    this.removeItemFromParent.emit(formValues); 
  }
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
  editItem(formValue: any) {
    formValue.editing = true;
    this.editItemEvent.emit(formValue);
  }
  
}

