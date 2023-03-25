import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';
import {PageService} from "./page.service";
import {Page, PagePagination} from './page.type'

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {
  /**
   * Constructor
   */
  constructor(
    private _pageService: PageService,
    private _router: Router
  ) {
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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page> {
    return this._pageService.getPage(route.paramMap.get('id'))
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
