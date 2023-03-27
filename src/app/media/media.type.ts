export interface Gallery {
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image: Image;
  date: Date
}

export interface OneGallery {
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  images: Images[];
  date: Date
}
export interface GetGallery {
 galleries: Gallery;
}



export interface fileProperties {
  small:string;
  original: string;
}
export interface Image {
  file: fileProperties;
  image_type:string;
  gallery_id:string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Images {
  file: fileProperties;
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
