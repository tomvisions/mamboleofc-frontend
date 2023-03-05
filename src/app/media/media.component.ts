import { Component, OnInit, AfterViewInit, OnDestroy  } from '@angular/core';
import { GalleryItem,ImageItem} from 'ng-gallery';
import { MediaService } from "./media.service";
import { Gallery, GalleryPagination} from "./media.type";
import {Observable, Subject, takeUntil} from 'rxjs';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
/*  template: `
    <gallery [items]="images"></gallery>
  ` */
})

export class MediaComponent implements OnInit, AfterViewInit, OnDestroy {
  images: GalleryItem[];
  galleries$: Observable<Gallery[]>;
  pagination: GalleryPagination;
  mediaCoverImage;

  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _mediaService: MediaService,
    private _imageService:ImageService
  ) { }

  ngOnDestroy() :void  {

  }

  ngAfterViewInit(): void {
    this._mediaService.pagination$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((pagination: GalleryPagination) => {

        // Update the pagination
        this.pagination = pagination;

      });
    this.galleries$ = this._mediaService.galleries$;
    console.log(this.galleries$);
  }

  ngOnInit(): void {
    this.mediaCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');

  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }
}
