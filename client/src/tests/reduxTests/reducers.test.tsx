import {
  restaurantsReducer,
  openFilterReducer,
  priceFilterReducer,
  catFilterReducer,
  ddItemPriceReducer,
  ddItemCatReducer,
  loadMoreReducer,
} from '../../redux/reducers/reducers'
import { exRestaurants } from '../../models/testdata'
import { costArr, categoriesArr } from '../../models/ddData'


describe('Reducer Tests', () => {
  it('RestaurantsReducer should return previous state', () => {
    const newState = restaurantsReducer(undefined, {type: "Dont update"})
    expect(newState).toEqual([])
  })
  
  it('RestaurantsReducer should return new state', () => {
    const newState = restaurantsReducer([], { type: "UPDATEREST", payload: [exRestaurants[0]]});
    expect(newState).toEqual([exRestaurants[0]]);
    
  })
  
  it('OpenFilterReducer should return previous state', () => {
    const newState = openFilterReducer(undefined, { type: "Dont update" });
    expect(newState).toBe(false);
    
  })
  
  it('OpenFilterReducer should return new state', () => {
    const changeFilterState = openFilterReducer(false, { type: "OPENFILTER" });
    const changeFilterState2 = openFilterReducer(true, { type: "OPENFILTER" });
    const closeFilterState = openFilterReducer(false, { type: "CLOSEOPENFILTER" });
    const closeFilterState2 = openFilterReducer(true, { type: "CLOSEOPENFILTER" });

    expect(closeFilterState).toBe(false)
    expect(closeFilterState2).toBe(false)
    expect(changeFilterState).toBe(true);
    expect(changeFilterState2).toBe(false);
  })
  
  it('PriceFilterReducer should return previous state', () => {
    const newState = priceFilterReducer(undefined, { type: "Dont update" });
    expect(newState).toBe(false);
    
  })
  
  it('PriceFilterReducer should return new state', () => {
    const changeFilterState = priceFilterReducer(false, { type: "PRICEFILTER" });
    const changeFilterState2 = priceFilterReducer(true, { type: "PRICEFILTER" });
    const closeFilterState = priceFilterReducer(false, {type: "KILLFILTERLISTS" });
    const closeFilterState2 = priceFilterReducer(true, { type: "KILLFILTERLISTS" });
    
    expect(changeFilterState).toBe(true);
    expect(changeFilterState2).toBe(false);
    expect(closeFilterState).toBe(false);
    expect(closeFilterState2).toBe(false);
    
  })
  
  it('CatFilterReducer should return previous state', () => {
    const newState = catFilterReducer(undefined, { type: "Dont update" });
    expect(newState).toBe(false);
    
  })
  
  it('CatFilterReducer should return new state', () => {
    const changeFilterState = catFilterReducer(false, { type: "CATFILTER" });
    const changeFilterState2 = catFilterReducer(true, { type: "CATFILTER" });
    const closeFilterState = catFilterReducer(false, { type: "KILLFILTERLISTS" });
    const closeFilterState2 = catFilterReducer(true, { type: "KILLFILTERLISTS" });

    expect(changeFilterState).toBe(true);
    expect(changeFilterState2).toBe(false);
    expect(closeFilterState).toBe(false);
    expect(closeFilterState2).toBe(false);
  })
  
  it('DDItemPriceReducer should return previous state', () => {
    const newState = ddItemPriceReducer(undefined, { type: "Dont update" });
    expect(newState).toEqual([]);
  })
  
  it('DDItemPriceReducer should return new state', () => {
    const newState = ddItemPriceReducer([], {
      type: "TOGGLEPRICESELECT",
      payload: costArr
    });
    expect(newState).toEqual(costArr)
    
  })

  it('ddItemCatReducer should return previous state', () => {
    const newState = ddItemCatReducer(undefined, { type: "Dont update" });
    expect(newState).toEqual([]);

  })
  
  it('ddItemCatReducer should return new state', () => {
    const newState = ddItemCatReducer([], { 
      type: "TOGGLECATSELECT",
      payload: categoriesArr
    });
    expect(newState).toEqual(categoriesArr);
  })
  
  it('loadMoreReducer should return previous state', () => {
    const newState = loadMoreReducer(undefined, { type: "Dont update" });
    expect(newState).toBe(10);
    
  })
  
  it('loadMoreReducer should return new state', () => {
    const newState = loadMoreReducer(10, { 
      type: "UPDATEVISIBLE",
      payload: 10 
    });
    expect(newState).toBe(20);
  })
  
})

