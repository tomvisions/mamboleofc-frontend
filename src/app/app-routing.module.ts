import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {MissiosVisionsValuesComponent} from "./missios-visions-values/missios-visions-values.component";
import {TheFlamingoComponent} from "./the-flamingo/the-flamingo.component";
import {ProgramsComponent} from "./programs/programs.component";
import {ContactComponent} from "./contact/contact.component";
import {FollowUsComponent} from "./follow-us/follow-us.component";
import {BlogComponent} from "./blog/blog.component";
import {EventsComponent} from "./events/events.component";
import {MediaComponent} from "./media/media.component";
import {GalleryComponent} from "./media/gallery.component";
import {EventsResolver} from "./events/events.resolvers";
import {EventResolver} from "./event/event.resolvers";
import {PageResolver} from "./page.resolvers";
import {EventComponent} from "./event/event.component";
import {MediaResolver} from "./media/media.resolver";
import {GalleryResolver} from "./media/gallery.resolver";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/mission-vision-values',
    component: MissiosVisionsValuesComponent,
  },
  {
    path: 'about/the-flamingo',
    component: TheFlamingoComponent,
  },
  {
    path: 'programs',
    component: ProgramsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'follow-us',
    component: FollowUsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
    resolve: {
      galleries: MediaResolver,
    }
  },
  {
    path: 'media/:id',
    component: GalleryComponent,
    resolve: {
      galleries: GalleryResolver,
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    resolve: {
      events: EventsResolver,
    },
  },
  {
    path     : 'events/:id',
    component: EventComponent,
    resolve  : {
      event  : EventResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
