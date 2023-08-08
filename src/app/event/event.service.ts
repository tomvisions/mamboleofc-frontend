import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import {Event, EventObject, EventPagination} from './event.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class EventService
{
  // Private
  private _pagination: BehaviorSubject<EventPagination | null> = new BehaviorSubject(null);
  private _event: BehaviorSubject<Event | null> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService : SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get event$(): Observable<Event>
  {
    return this._event.asObservable();
  }


  getEvent(slug): Observable<Event>
  {
    console.log(`${this._sharedService.apiLocation}/api/v1/event/slug=${slug}`);
    return this.event$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.get<EventObject>(`${this._sharedService.apiLocation}/api/v1/event/slug/${slug}`,
        { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((event:EventObject) => {

          this._event.next(event.event);

          return event.event;
        }),
      ))
    );
  }
}
