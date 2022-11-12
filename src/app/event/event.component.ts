import { Component, OnInit } from '@angular/core';
import {EventService} from "./event.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Event} from './event.type'

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  eventInfo: Event;
  event$: Observable<Event>;

  constructor(
    private _eventService: EventService,

  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.event$ = this._eventService.event$;

    // Get the teams
    this._eventService.event$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((event: Event) => {
      //  this.event = 'hello';
      //  this.event = event;
        //console.log(this.event);

        this.eventInfo = event['event'][0]['content'];
     //   console.log(eventInfo);
      });

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
