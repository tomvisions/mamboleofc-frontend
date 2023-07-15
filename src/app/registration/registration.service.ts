import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Registration } from './registration.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService
{
  // Private
  private _contactUs: BehaviorSubject<Registration | null> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get contactUs$(): Observable<Registration>
  {
    return this._contactUs.asObservable();
  }

  sendRegistration(registration: Registration): Observable<Registration>
  {
    return this.contactUs$.pipe(
      take(1),
      switchMap(theRegistration => this._httpClient.post<Registration>(`${this._sharedService.apiLocation}/api/v1/mail`,
        registration, { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((registration) => {

          return registration;
        }),
      ))
    );
  }
}
