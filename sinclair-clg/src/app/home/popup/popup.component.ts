import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  popupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.popupForm = this.fb.group({
      fname: ['', Validators.required],
      std_email: ['', [Validators.required, Validators.email]],
      ph_no: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.popupForm.valid) {
      console.log(this.popupForm.value);
    } else {
      this.popupForm.markAllAsTouched();
    }
  } 
}
