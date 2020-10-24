import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//////////////////////////////Client/////////////////////////////////
import { AboutComponent } from './Client/about/about.component';
import { IndexClientComponent } from './Client/index-client/index-client.component';
import { BlogComponent } from './Client/blog/blog.component';
import { BlogDetailComponent } from './Client/blog-detail/blog-detail.component';
import { CarComponent } from './Client/car/car.component';
import { CarDetailComponent } from './Client/car-detail/car-detail.component';
import { ContactComponent } from './Client/contact/contact.component';
import { HomeComponent } from './Client/home/home.component';
import { ServicesComponent } from './Client/services/services.component';
import { InformationComponent } from './Client/information/information.component';
import { RegisterClientComponent } from './Client/register-client/register-client.component';
import { LoginClientComponent } from './Client/login-client/login-client.component';


const routes: Routes = [

  {path: 'Carrental',   redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginClientComponent},
  {path: 'register', component: RegisterClientComponent},
  
  {path: '',   redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexClientComponent, children:[
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blogdetail', component: BlogDetailComponent},
  {path: 'car', component: CarComponent},
  {path: 'detail', component: CarDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'information', component: InformationComponent},
  {path: 'services', component: ServicesComponent}
  ]},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
