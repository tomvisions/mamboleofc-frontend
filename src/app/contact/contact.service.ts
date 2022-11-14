import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Contact } from './contact.type';

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
  constructor(private _httpClient: HttpClient)
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
    return this.contactUs$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Contact>('https:////g5ysgf59a8.execute-api.us-east-1.amazonaws.com/prod/api/v1/mail',
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
