import * as React from 'react';
interface ratingProp {
    rating: number;
    size?: any;
}
declare const MemStarRating: React.MemoExoticComponent<({ rating, size }: ratingProp) => JSX.Element>;
export default MemStarRating;
