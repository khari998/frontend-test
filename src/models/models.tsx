export enum Cost { 
  $, $$, $$$, $$$$
}

export const Categories: Array<string> = [
  'Italian', 'Seafood', 'Steakhouses', 'Japanese', 'American', 'Mexican', 'Thai',
]

export interface Review {
  name: string,
  date: string,
  rating: number,
  review: string,
}

export interface Restaurant {
  title: string,
  category: string,
  open: boolean,
  cost: string,
  avg_rating: number,
  reviews: Review[], // An array of Review Interfaces
}


