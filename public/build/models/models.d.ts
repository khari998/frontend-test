export declare class DdItem {
    content: string;
    selected: boolean;
    constructor(content: string, selected: boolean);
}
export declare class Review {
    revId: string;
    resId: string;
    name: string;
    date: string;
    rating: number;
    review: string;
    image: string;
    constructor(revId: string, resId: string, name: string, date: string, rating: number, review: string, image: string);
}
export declare class Restaurant {
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
    constructor(resId: string, title: string, category: string[], isOpen: boolean, cost: string, avg_rating: number, img: string, totReviews: number, location: string, coordinates: number[], reviews: Review[]);
}
