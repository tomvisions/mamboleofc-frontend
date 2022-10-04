import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {EventsService} from "./events.service";
import {Event, EventPagination} from './events.type'

@Injectable({
    providedIn: 'root'
})
export class EventsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _eventService: EventsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pagination: EventPagination; events: Event[] }>
    {

        return this._eventService.getEvents();
    }
}
