import { DdItem } from '../models/models';

export const costArr: DdItem[] = [ // Default Price Dropdown data
  new DdItem('0', 'All', true),
  new DdItem('1', '$', false),
  new DdItem('2', '$$', false),
  new DdItem('3', '$$$', false),
  new DdItem('4', '$$$$', false),
]

export const categoriesArr: DdItem[] = [ // Default Categories Dropdown data
  new DdItem('0', 'All', true),
  new DdItem('1', 'Italian', false),
  new DdItem('2', 'Seafood', false),
  new DdItem('3', 'Steakhouses', false),
  new DdItem('4', 'Japanese', false),
  new DdItem('5', 'American', false),
  new DdItem('6', 'Mexican', false),
  new DdItem('7', 'Thai', false),
]