import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryModule, GALLERY_CONFIG } from "ng-gallery";
import { LightboxModule } from "ng-gallery/lightbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { BlogComponent } from './blog/blog.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpHandler, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { MissiosVisionsValuesComponent } from './missios-visions-values/missios-visions-values.component';
import { TheFlamingoComponent } from './the-flamingo/the-flamingo.component';
import { EventComponent } from './event/event.component';
import { MediaComponent } from './media/media.component';
import { GalleryComponent } from './media/gallery.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProgramsComponent,
        EventsComponent,
        ContactComponent,
        FollowUsComponent,
        BlogComponent,
        MissiosVisionsValuesComponent,
        TheFlamingoComponent,
        EventComponent,
        MediaComponent,
        GalleryComponent,
        RegistrationComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        GalleryModule,
        LightboxModule], providers: [{
            provide: GALLERY_CONFIG,
            useValue: {}
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
