import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ROUTING } from './app.routing';
import { BodyComponent } from './body/body.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MarksComponent } from './marks/marks.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,
   MatOptionModule, MatSelectModule, MatRadioModule} from '@angular/material';
import { FormServicesService } from './shared/form-services.service';
import {HttpModule} from '@angular/http';
import { FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MentorRegComponent } from './mentor-reg/mentor-reg.component';
import { LandingComponent } from './landing/landing.component';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MarksComponent,
    StudentDetailsComponent,
    MentorRegComponent,
    LandingComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, FormServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
