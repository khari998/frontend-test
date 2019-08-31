export enum Cost { // Stores cost range values as strings
  $, $$, $$$, $$$$
}

export const Categories: Array<string> = [ // Food Categories
  'Italian', 'Seafood', 'Steakhouses', 'Japanese', 'American', 'Mexican', 'Thai',
]

export class Review { // class model for Reviews
  revId: string; // Unique review id
  resId: string; // Id of restaurant that a given Review belongs to
  name: string; 
  date: string;
  rating: number;
  review: string;

  constructor(
    revId: string,
    resId: string,
    name: string,
    date: string,
    rating: number,
    review: string,
  ) {
    this.revId = revId;
    this.resId = resId;
    this.name = name;
    this.date = date;
    this.rating = rating;
    this.review = review;
  }

}

export class Restaurant { // class model for Restaurants
  resId: string;
  title: string;
  category: string;
  open: boolean;
  cost: string;
  avg_rating: number;
  reviews: Review[]; // instantiated with an array of Review classes

  constructor(
    resId: string,
    title: string,
    category: string,
    open: boolean,
    cost: string,
    avg_rating: number,
    reviews: Review[],
  ) {
    this.resId = resId;
    this.title = title;
    this.category = category;
    this.open = open;
    this.cost = cost;
    this.avg_rating = avg_rating;
    this.reviews = reviews;
  }
}
