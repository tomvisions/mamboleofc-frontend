import { Component, OnInit, AfterViewInit, OnDestroy  } from '@angular/core';
import { GalleryItem,ImageItem} from 'ng-gallery';
import { MediaService } from "./media.service";
import { Gallery, GalleryPagination} from "./media.type";
import {Observable, Subject, takeUntil} from 'rxjs';

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


  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _mediaService: MediaService,

  ) { }

  ngOnDestroy() :void  {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

    this._mediaService.pagination$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((pagination: GalleryPagination) => {

        // Update the pagination
        this.pagination = pagination;

        // Mark for check
     //   this._changeDetectorRef.markForCheck();
      });
    this.galleries$ = this._mediaService.galleries$;
    console.log(this.galleries$);

    this.images = [
      new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' }),
    // ... more items
  ];
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
