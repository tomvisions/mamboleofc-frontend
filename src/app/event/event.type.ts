export interface EventObject {
  event:Event
}

export interface Event
{
  id: string;
  name: string;
  content: string;
  slug: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  about: string;
  bannerImage: string;
  contentImage: string;
  aboutImage: string;
  link: string;
  linkName: string;
  rightSideImage: string[];
}

export interface EventPagination
{
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}
