import { Restaurant, DdItem } from '../../models/models';
/**
 * Reducers for redux store
 * Updates redux store state based on action that was dispatched in components
 * */
export declare const restaurantsReducer: (state: Restaurant[] | undefined, action: any) => any;
export declare const ddItemPriceReducer: (state: DdItem[] | undefined, action: any) => any;
export declare const ddItemCatReducer: (state: DdItem[] | undefined, action: any) => any;
export declare const openFilterReducer: (state: boolean | undefined, action: any) => boolean;
export declare const priceFilterReducer: (state: boolean | undefined, action: any) => boolean;
export declare const catFilterReducer: (state: boolean | undefined, action: any) => boolean;
export declare const loadMoreReducer: (state: number | undefined, action: any) => any;
