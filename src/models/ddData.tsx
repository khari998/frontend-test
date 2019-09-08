import { DdItem } from '../models/models';

export const costArr: DdItem[] = [ // Default Price Dropdown data
  new DdItem('All', true),
  new DdItem('$', false),
  new DdItem('$$', false),
  new DdItem('$$$', false),
  new DdItem('$$$$', false),
]

export const categoriesArr: DdItem[] = [ // Default Categories Dropdown data
  new DdItem('All', true),
  new DdItem('Italian', false),
  new DdItem('Seafood', false),
  new DdItem('Steakhouses', false),
  new DdItem('Japanese', false),
  new DdItem('American', false),
  new DdItem('Mexican', false),
  new DdItem('Thai', false),
]
