import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Event} from './events.type'
import {ImageService} from "../image.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  events: Event[];
  events$: Observable<Event[]>;
  upcomingEventsHomeImage;

  constructor(
    private _eventService: EventsService,
    private _imageService:ImageService
  ) { }

  ngAfterContentInit(): void {
    this.events$ = this._eventService.events$;

    // Get the teams
    this._eventService.events$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((events: Event[]) => {
        this.events = events;
      });
  }

  ngOnInit(): void {
    this.upcomingEventsHomeImage = this._imageService.loadImage1920x940('upcoming-events-home.jpg');

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
