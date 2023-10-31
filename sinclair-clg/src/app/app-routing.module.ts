import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { RegisterComponent } from './course/register/register.component';

export const routes: Routes = [
  {path:'home',loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
    {path:'about',component:AboutComponent},{path:'course',component:CourseComponent},{path:'register',component:RegisterComponent}
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
];