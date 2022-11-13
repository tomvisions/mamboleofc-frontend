import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {MediaService} from "./media.service";
import {Gallery, GalleryPagination} from './media.type'

@Injectable({
  providedIn: 'root'
})

export class GalleryResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(private _mediaService: MediaService,  private _router: Router)
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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Gallery>
  {
    return this._mediaService.getGalleryById(route.paramMap.get('id'))
      .pipe(
        // Error here means the requested product is not available
        catchError((error) => {

          // Log the error
          console.error(error);

          // Get the parent url
          const parentUrl = state.url.split('/').slice(0, -1).join('/');

          // Navigate to there
          this._router.navigateByUrl(parentUrl);

          // Throw an error
          return throwError(error);
        })
      );
  }
}
