import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[],selectedCourses: any[]): any[] {
    if (!items || !selectedCourses || selectedCourses.length === 0) {
      return items;
    }
    return items.filter(item => {
      for (const course of selectedCourses) {//item is a obj of items array 
        if (item.courses.some((itemCourse:any) => itemCourse.name === course.name)) {//itemCourse is obj of courses obj in item obj of items arr
          return true;
        }
      }
      return false;
    });
    
  }
}
