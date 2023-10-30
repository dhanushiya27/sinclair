import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers:[ 
    importProvidersFrom(RouterModule.forRoot([  {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent}]
  )),
  // provideRouter([
  //   // {path:'home',component:HomeComponent},
  //   // {path:'about',component:AboutComponent}
  //   // {path:'home',loadComponent:()=>import('./app/home/home.component').then(c=>c.HomeComponent)},
  //   // {path:'about',loadComponent:()=>import('./app/about/about.component').then(c=>c.AboutComponent)},
  // ])
]
})
