export interface Gallery {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  images: Images[];
}

export interface GetGallery {
 galleries: Gallery;
}



export interface fileProperties {
  small:string;
  original: string;
}
export interface Images {
  file: fileProperties;
  id: string;
  image_type:string;
  gallery_id:string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryPagination
{
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}
