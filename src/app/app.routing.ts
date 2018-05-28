import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { StartupComponent } from './startup/startup.component';

import { MentorRegComponent } from './mentor-reg/mentor-reg.component';
export const AppRoutes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'start-up', component: StartupComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mentor-reg', component: MentorRegComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
