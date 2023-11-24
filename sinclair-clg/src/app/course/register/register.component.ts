import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from "primeng/toast";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { RegisterDataComponent } from '../register-data/register-data.component';
import { NavigationStart, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  providers:[MessageService ],
  imports: [CommonModule,RouterModule
  ,RegisterDataComponent ,FormsModule,ToastModule, DropdownModule,MultiSelectModule,ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showFooter: boolean = false;
  form: FormGroup;//to access the form struct & validation
  selectedItem: any; 
  editForm: boolean = false;
  overlayVisible: boolean = false;
  isHomePage:boolean=false;
  
  courses: any[] = [
        {name:'Astronomy'},
       {name:'Microbiology'},
       {name:'Hospitality Management'},
       {name:'Pathophysiology'},
       {name:'Africana Studies'},
       {name:'Accounting'},
       {name:'Visual Communications'},
       {name:'Mathematics and Engineering'},
       {name:'Law'},
       {name:'Mathematics'}
  ];
  formValues: any[] = JSON.parse(localStorage.getItem('formValues') || '[]');//string to array
 

  constructor(private router: Router, private fb: FormBuilder,private messageService: MessageService) {//formbuilder is for validation purpose
    this.form = this.fb.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            std: ['', Validators.required],
            std_email: ['', [Validators.required, Validators.email]],
            doj: ['', Validators.required],
            ph_no: [ '',[ Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]],
            gender: ['', Validators.required],
            lang: [''], 
            courses: [''], 
          });
  }
  ngOnInit() {}
  saveFormData() {
    const formObj = this.form.value;
    this.formValues.push(formObj);
    localStorage.setItem('formValues', JSON.stringify(this.formValues));
    this.form.reset();
  } 
  showSuccess() {
     console.log('showSuccess method called');
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Enrolled course successfully' });
  this.overlayVisible = true;
  }
  
  handleToastClose(){
    this.overlayVisible = false; 
  }
  navigateToRegisterData() {
    console.log('Navigating to Register Data');
    this.router.navigate(['/register-data']);
  }
   removeItemFromChild(formValueRecieved:any){
    const index = this.formValues.indexOf(formValueRecieved);//array.indexof (obj)
    this.formValues.splice(index, 1);
    localStorage.setItem('formValues', JSON.stringify(this.formValues));//stringify - array to string
  }

  editItem(updatedItem: any) {
    this.editForm = true;
    this.selectedItem = updatedItem;
    this.form.patchValue(updatedItem); // Pre-fill the form with the selected item's data
  }
    saveEditedData() {
    this.editForm = false;
    const index = this.formValues.indexOf(this.selectedItem);
    this.formValues[index] = this.form.value; //
    localStorage.setItem('formValues', JSON.stringify(this.formValues));
    this.form.reset();
  }
}
