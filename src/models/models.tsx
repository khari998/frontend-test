export enum Cost { 
  $, $$, $$$, $$$$
}

export interface Restaurant {
  title: string,
  category: string,
  open: boolean,
  cost: string,
  avg_rating: number,
  reviews: Review[], // An array of Review Interfaces
}

export interface Review {
  name: string,
  date: string,
  rating: number,
  review: string,
}
