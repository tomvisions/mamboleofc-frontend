import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import {Gallery, GalleryPagination, GetGallery} from "./media.type";
import {Event} from "../event/event.type";
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})

export class MediaService
{
  // Private
  private _galleries: BehaviorSubject<Gallery[] | null> = new BehaviorSubject(null);
  private _gallery: BehaviorSubject<Gallery | null> = new BehaviorSubject(null);

  private _pagination: BehaviorSubject<GalleryPagination | null> = new BehaviorSubject(null);


  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  get galleries$(): Observable<Gallery[]> {
    return this._galleries.asObservable();
  }
  get gallery$(): Observable<Gallery> {
    return this._gallery.asObservable();
  }


  getGalleryById(slug) : Observable<Gallery> {

    return this.gallery$.pipe(
      take(1),
      switchMap(gallery => this._httpClient.get<GetGallery>(`${this._sharedService.apiLocation}/api/v1/gallery?gallery_id=${slug}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).pipe(
        map((getgallery) => {
          const gallery = getgallery.galleries[0]
          this._gallery.next(gallery);

          return gallery;
        }),
      ))
    );
  }


  get pagination$(): Observable<GalleryPagination> {
    return this._pagination.asObservable();
  }



  getGalleries(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):     Observable<{ pagination: GalleryPagination; galleries: Gallery[] }>
  {
    return this._httpClient.get<{ pagination:  GalleryPagination; galleries: Gallery[] }>(`${this._sharedService.apiLocation}/api/v1/gallery?primary=1`, {
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
        this._galleries.next(response.galleries);
      })
    );
  }
}
