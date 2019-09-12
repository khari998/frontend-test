export class DdItem { // class model for Dropdown menu items
  content: string;
  selected: boolean;
  
  constructor(
    content: string,
    selected: boolean,
  ) {
    this.content = content;
    this.selected = selected;
  }
}

export class Review { // class model for Reviews
  revId: string; // Unique review id
  resId: string; // Id of restaurant that a given Review belongs to
  name: string; 
  date: string;
  rating: number;
  review: string;
  image: string;

  constructor(
    revId: string,
    resId: string,
    name: string,
    date: string,
    rating: number,
    review: string,
    image: string,
  ) {
    this.revId = revId;
    this.resId = resId;
    this.name = name;
    this.date = date;
    this.rating = rating;
    this.review = review;
    this.image = image
  }
}

export class Restaurant { // class model for Restaurants
  resId: string;
  title: string;
  category: string[];
  isOpen: boolean;
  cost: string;
  avg_rating: number;
  img: string;
  coordinates: number[];
  totReviews: number;
  reviews: Review[];
  location: string;
  constructor(
    resId: string,
    title: string,
    category: string[],
    isOpen: boolean,
    cost: string,
    avg_rating: number,
    img: string,
    totReviews: number,
    location: string,
    coordinates: number[],
    reviews: Review[],
  ) {
    this.resId = resId;
    this.title = title;
    this.category = category;
    this.isOpen = isOpen;
    this.cost = cost;
    this.avg_rating = avg_rating;
    this.img = img;
    this.coordinates = coordinates;
    this.totReviews = totReviews;
    this.reviews = reviews;
    this.location = location;
  }
}

