import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './course/register/register.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule,FooterComponent,RouterOutlet,HomeComponent,AboutComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sinclair-clg';
  showFooter: boolean = true;
  isHomePage: boolean = false; 
  isRegisterPage: boolean = false;
  isRegistersPage: boolean = false;

 
  
  constructor(private router: Router,private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter = !this.router.url.includes('register');
      }
    });
    this.router.events.subscribe((val) => {
      if (this.router.url === '/home') {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRegisterPage = event.url.includes('/register');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRegistersPage = this.router.url === '/register';
      }
    });
  }
}
