export interface Event
{
  id: string;
  name: string;
  content: string;
  slug: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  intro: string;
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
