import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessMessageService } from '../service/success-message.service';
import { SuccessMessageComponent } from '../success-message/success-message.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,SuccessMessageComponent,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showUserNameField = true;
  title = "Register";
  user = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private successMessageService: SuccessMessageService) {}
  ngOnInit() {
    window.scroll(0,0);
  }
  showSignUp() {
    this.showUserNameField = true;
    this.title = 'Register';
  }

  showSignIn() {
    this.showUserNameField = false;
    this.title = 'Log In';
  }
  loginUser() {
    this.successMessageService.showSuccessMessage('Registration was successful!');
  }
  registerUser() {
    this.successMessageService.showSuccessMessage('Login was successful!');
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted with values:', this.user);
    }
  }
}
