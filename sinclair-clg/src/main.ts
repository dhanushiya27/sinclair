import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { importProvidersFrom } from '@angular/core';
import { CourseComponent } from './app/course/course.component';

bootstrapApplication(AppComponent, {
  providers:[ 
    importProvidersFrom(RouterModule.forRoot([  {path:'home',loadComponent:()=>import('./app/home/home.component').then(c=>c.HomeComponent)},
    {path:'about',component:AboutComponent},{path:'course',component:CourseComponent}]
  )),
  // provideRouter([
  //   // {path:'home',component:HomeComponent},
  //   // {path:'about',component:AboutComponent}
  //   // {path:'home',loadComponent:()=>import('./app/home/home.component').then(c=>c.HomeComponent)},
  //   // {path:'about',loadComponent:()=>import('./app/about/about.component').then(c=>c.AboutComponent)},
  // ])
]
})
