import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent ,FooterComponent,RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sinclair-clg';
  isHomePage: boolean = true; // Define isHomePage
  isRegisterPage: boolean = false; // Define isRegisterPage
  showFooter: boolean = true; // Define showFooter
}
