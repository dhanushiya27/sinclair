import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter} from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { importProvidersFrom } from '@angular/core';
import { CourseComponent } from './app/course/course.component';
import { RegisterComponent } from './app/course/register/register.component';
import { BlogComponent } from './app/blog/blog.component';
import { SignupComponent } from './app/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
  providers:[importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot([ {path:'home',loadComponent:()=>import('./app/home/home.component').then(c=>c.HomeComponent)},
    {path:'about',component:AboutComponent},
    {path:'course',component:CourseComponent},
    { path: 'course/register', component: RegisterComponent },
     {path:'blog',component:BlogComponent},
    {path:'signup',component:SignupComponent}]
  )),

  
  // provideRouter([
  //   // {path:'home',component:HomeComponent},
  //   // {path:'about',component:AboutComponent}
  //   // {path:'home',loadComponent:()=>import('./app/home/home.component').then(c=>c.HomeComponent)},
  //   // {path:'about',loadComponent:()=>import('./app/about/about.component').then(c=>c.AboutComponent)},
  // ])
]

})
