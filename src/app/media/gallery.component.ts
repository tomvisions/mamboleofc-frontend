import { Component, OnInit, AfterViewInit, OnDestroy  } from '@angular/core';
import { GalleryItem,ImageItem} from 'ng-gallery';
import { MediaService } from "./media.service";
import { Gallery, OneGallery, GalleryPagination} from "./media.type";
import {Observable, Subject, takeUntil} from 'rxjs';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})

export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  images: GalleryItem[];
  pagination: GalleryPagination;
  gallery: OneGallery
  mediaCoverImage;

  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _mediaService:  MediaService,
    private _imageService:ImageService
  ) { }

  ngOnDestroy() :void  {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.mediaCoverImage = this._imageService.loadImage1920x940('contact-us-hero2.jpg');
    this.images = [];
    this._mediaService.gallery$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((gallery: OneGallery) => {
          for (let images of gallery.images) {
            this.images.push(new ImageItem({ src: `${images.file.original}`, thumb: `${images.file.small}` }));
            console.log(this.images);
          }
          this.gallery = gallery;
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
