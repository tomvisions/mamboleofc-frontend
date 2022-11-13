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
        console.log('the gallery');
        console.log(gallery);
//      console.log(gallery[0].id);
          for (let images of gallery.images) {
            console.log(images.file);
            this.images.push(new ImageItem({ src: `${images.file.original}`, thumb: `${images.file.small}` }));
//            console.log(images);
          }
        // Update the pagination
 //       this.pagination = pagination;

        // Mark for check
        //   this._changeDetectorRef.markForCheck();
      });
  //  console.log('the stuff');
  //  const boo = this._mediaService.getGalleryById;
   // console.log(boo);
   // this.galleries.
  //  console.log(this.galleries);


  //  for (let gallery of this.galleries.value) {
  //    console.log(gallery);
  //  }
//    new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' }),
   // this.images = [
  //    new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' }),
      // ... more items
  //  ];
    console.log(this.images);
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
