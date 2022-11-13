import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {MediaService} from "./media.service";
import {Gallery, GalleryPagination} from './media.type'

@Injectable({
  providedIn: 'root'
})
export class MediaResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(private _mediaService: MediaService)
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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pagination: GalleryPagination; galleries: Gallery[] }>
  {

    return this._mediaService.getGalleries();
  }
}
