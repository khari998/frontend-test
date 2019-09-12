import { Restaurant, DdItem } from '../../models/models';
/**
 * Actions for redux reducers
 * Dictates which logic should be executed in the reducers on redux state
 * */
export declare const updateRestaurants: (restArr: Restaurant[]) => {
    type: string;
    payload: Restaurant[];
};
export declare const priceItemToggle: (priceArr: DdItem[]) => {
    type: string;
    payload: DdItem[];
};
export declare const catItemToggle: (catArr: DdItem[]) => {
    type: string;
    payload: DdItem[];
};
export declare const isOpenToggle: () => {
    type: string;
};
export declare const closeOpenToggle: () => {
    type: string;
};
export declare const priceDDToggle: () => {
    type: string;
};
export declare const catDDToggle: () => {
    type: string;
};
export declare const loadMore: () => {
    type: string;
    payload: number;
};
export declare const closeFilterLists: () => {
    type: string;
};
