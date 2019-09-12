import * as React from 'react';
import { Review } from '../models/models';
interface reviewsProp {
    review: Review;
}
declare const MemRestaurantReviewItem: React.MemoExoticComponent<({ review }: reviewsProp) => JSX.Element>;
export default MemRestaurantReviewItem;
