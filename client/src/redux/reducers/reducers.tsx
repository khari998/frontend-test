import { Restaurant, DdItem } from '../../models/models';

/** 
 * Reducers for redux store 
 * Updates redux store state based on action that was dispatched in components
 * */

export const restaurantsReducer = (state: Restaurant[] = [], action: any) => {
  switch(action.type) {
    case "UPDATEREST":
      return action.payload;
    default:
      return state;
  }
};

export const ddItemPriceReducer = (state: DdItem[] = [], action: any) => {
  switch(action.type) {
    case "TOGGLEPRICESELECT":
      return action.payload;
    default:
      return state;
  }
};

export const ddItemCatReducer = (state: DdItem[] = [], action: any) => {
  switch(action.type) {
    case "TOGGLECATSELECT":
      return action.payload;
    default:
      return state;
  }
};

export const openFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "OPENFILTER":
      return !state;
    case "CLOSEOPENFILTER":
      return false; // So clear all button won't change to true if it is initially false
    default:
      return state;
  }
}

export const priceFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "PRICEFILTER":
      return !state;
    case "KILLFILTERLISTS":
      return false;
    default:
      return state;
  }
}

export const catFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "CATFILTER":
      return !state;
    case "KILLFILTERLISTS":
      return false;
    default:
      return state;
  }
}

export const loadMoreReducer = (state = 10, action: any) => {
  switch (action.type) {
    case "UPDATEVISIBLE":
      return state + action.payload;
    default:
      return state;
  }
}
