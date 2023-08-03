import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap, take, tap} from "rxjs";
import {Page, PageObject} from "./page.type";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private _page: BehaviorSubject<Page  | null> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService) { }



  /**
   * Getter for product
   */
  get page$(): Observable<Page>
  {
    return this._page.asObservable();
  }


  getPage(slug): Observable<Page>
  {
    console.log(`${this._sharedService.apiLocation}/api/v1/page?slug=${slug}`);
    console.log('here');
    return this.page$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.get<PageObject>(`${this._sharedService.apiLocation}/api/v1/page/slug/${slug}`,
        { headers: {
            'Content-Type': 'application/json'
          }}).pipe(
        map((page:PageObject) => {

          this._page.next(page.page);

          return page.page;
        }),
      ))
    );
  }
}
