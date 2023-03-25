import {Event} from "./event/event.type";

export interface Page
{
  id: string;
  name: string;
  content: string;
  slug: string;
  identifier: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PagePagination
{
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}

export interface PageObject {
  page:Page
}
