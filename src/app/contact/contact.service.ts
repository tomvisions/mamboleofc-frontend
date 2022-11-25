import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Contact } from './contact.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class ContactService
{
  // Private
  private _contactUs: BehaviorSubject<Contact | null> = new BehaviorSubject(null);

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
  get contactUs$(): Observable<Contact>
  {
    return this._contactUs.asObservable();
  }

  sendContactUs(contact: Contact): Observable<Contact>
  {

    console.log('the info');
    console.log(`${this._sharedService.apiLocation}/api/v1/mail`);
    console.log(contact);
    return this.contactUs$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Contact>(`${this._sharedService.apiLocation}/api/v1/mail`,
        contact, { headers: {
          'Content-Type': 'application/json'
        }}).pipe(
        map((contact) => {

          return contact;
        }),
      ))
    );
  }
}
