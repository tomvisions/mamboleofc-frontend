import { Component, OnInit, AfterViewInit, OnDestroy  } from '@angular/core';
import { GalleryItem,ImageItem} from 'ng-gallery';
import { MediaService } from "./media.service";
import { Gallery, GetGallery, GalleryPagination} from "./media.type";
import {Observable, Subject, takeUntil} from 'rxjs';
import {Event} from "../event/event.type";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
 /*   template: `
    <gallery [items]="images"></gallery>
  ` */
})

export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  images: GalleryItem[];
  galleries: Observable<Gallery[]>;
  pagination: GalleryPagination;
  gallery: Observable<Gallery>


  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _mediaService:  MediaService,

  ) { }

  ngOnDestroy() :void  {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

    this.images = [];
    this._mediaService.gallery$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((gallery: Gallery) => {
          for (let images of gallery.images) {
            this.images.push(new ImageItem({ src: `${images.file.original}`, thumb: `${images.file.small}` }));
          }

        // Mark for check
        //   this._changeDetectorRef.markForCheck();
      });
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
