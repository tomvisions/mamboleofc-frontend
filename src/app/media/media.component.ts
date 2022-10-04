import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { GalleryItem, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})

export class MediaComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

  ngOnInit(): void {
    this.images = [
 //     new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })),
    // ... more items
  ];
  }

}
