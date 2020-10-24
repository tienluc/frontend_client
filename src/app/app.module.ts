import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
////////////////////// Start ngx-bootstrap////////////////////////////////
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
////////////////////// End ngx-bootstrap//////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Client/about/about.component';
import { IndexClientComponent } from './Client/index-client/index-client.component';
import { HomeComponent } from './Client/home/home.component';
import { ContactComponent } from './Client/contact/contact.component';
import { BlogComponent } from './Client/blog/blog.component';
import { BlogDetailComponent } from './Client/blog-detail/blog-detail.component';
import { CarComponent } from './Client/car/car.component';
import { CarDetailComponent } from './Client/car-detail/car-detail.component';
import { ServicesComponent } from './Client/services/services.component';
import { InformationComponent } from './Client/information/information.component';
import { RegisterClientComponent } from './Client/register-client/register-client.component';
import { LoginClientComponent } from './Client/login-client/login-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexClientComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    BlogDetailComponent,
    CarComponent,
    CarDetailComponent,
    ServicesComponent,
    InformationComponent,
    RegisterClientComponent,
    LoginClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
