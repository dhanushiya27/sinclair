import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './course/register/register.component';
import { RegisterDataComponent } from './course/register-data/register-data.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register-data', component: RegisterDataComponent },
  { path: '', redirectTo: '/register-data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

  // {path:'home',loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
  //   {path:'about',component:AboutComponent},{path:'course',component:CourseComponent},
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
