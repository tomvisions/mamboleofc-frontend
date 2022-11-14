import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Event, EventPagination } from './events.type';

@Injectable({
  providedIn: 'root'
})
export class EventsService
{
  // Private
  private _pagination: BehaviorSubject<EventPagination | null> = new BehaviorSubject(null);
  private _events: BehaviorSubject<Event[] | null> = new BehaviorSubject(null);
  private _event: BehaviorSubject<Event | null> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get events$(): Observable<Event[]>
  {
    return this._events.asObservable();
  }

  getEvents(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):     Observable<{ pagination: EventPagination; events: Event[] }>
  {
    return this._httpClient.get<{ pagination: EventPagination; events: Event[] }>('https://g5ysgf59a8.execute-api.us-east-1.amazonaws.com/prod/api/v1/event', {
      params: {
        page: '' + page,
        size: '' + size,
        sort,
        order,
        search
      }
    }).pipe(
      tap((response) => {
        this._pagination.next(response.pagination);
        this._events.next(response.events);
      })
    );
    /*
    return this.events$.pipe(
      take(1),
      switchMap(events => this._httpClient.get<Event[]>('https://g5ysgf59a8.execute-api.us-east-1.amazonaws.com/prod/api/v1/event', { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((events) => {

          return events;
        }),
      ))
    ); */
  }
}
