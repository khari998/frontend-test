import * as React from 'react';
import { Restaurant } from '../models/models';
interface rListItemProps {
    R: Restaurant;
}
declare const MemRestaurantItem: React.MemoExoticComponent<({ R }: rListItemProps) => JSX.Element>;
export default MemRestaurantItem;
