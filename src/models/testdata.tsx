// export {} // to make typescript happy

import { Restaurant, Review } from './models';
import { costArr, categoriesArr } from '../models/ddData'


const imgs = {
  panda: 'https://d38trduahtodj3.cloudfront.net/images.ashx?t=ig&rid=VisitHenrico&i=panda_express.png&w=330&h=330&cropbox=1&cropboxhpos=center&stf=1',
  car: 'https://vectorlogoseek.com/wp-content/uploads/2018/09/carrabbas-italian-grill-vector-logo.png',
  cope: 'https://copelandsofneworleans.com/wp-content/uploads/2018/07/CNO-Red-TAGLINE.png',
  dragos: 'https://dragosrestaurant.com/wp-content/uploads/2018/01/dragos-image-logo.png',
  redL: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Redlobster_logocopia.png',
  outb: 'https://ncccc.org/wp-content/uploads/2018/09/Outback-Steakhouse-logo.png',
  mcDon: 'https://news.mcdonalds.com/system/files-encrypted/styles/nir_media_item_grid_thumbnail/encrypt/nasdaq_kms/media_gallery/thumbnail/2019-04/The%20Token.png?itok=yRL6WXDB',
  fel: 'https://baltimorefishbowl.com/wp-content/uploads/2019/01/Felipes-logo-e1546464726282.jpg',
  chi: 'https://www.nrn.com/sites/nrn.com/files/uploads/2016/04/chipotlelogopromo_0.jpg',
  pho: 'https://www.menusie.com/uploads/5/2/9/9/52994693/pho-bistro-banner_orig.png',
};

const sampleReview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. 
Suspendisse ultrices gravida dictum fusce. Aliquet nec ullamcorper sit amet risus. At consectetur lorem donec 
massa sapien faucibus et molestie. Amet justo donec enim diam vulputate ut pharetra sit. Cursus in hac habitasse 
platea dictumst. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dolor purus non enim praesent 
elementum facilisis leo. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Maecenas accumsan 
lacus vel facilisis volutpat. Volutpat maecenas volutpat blandit aliquam etiam. Egestas fringilla phasellus 
faucibus scelerisque eleifend donec pretium vulputate. Egestas tellus rutrum tellus pellentesque eu tincidunt 
tortor aliquam nulla. Amet cursus sit amet dictum sit amet. Nisi porta lorem mollis aliquam ut. Dignissim diam 
quis enim lobortis scelerisque fermentum dui. Ipsum dolor sit amet consectetur adipiscing elit ut. Tellus molestie 
nunc non blandit massa enim nec. Et malesuada fames ac turpis egestas maecenas.`

const carReviews = [
  new Review('111', '1', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('112', '1', 'Sarah', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('113', '1', 'Imani', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('114', '1', 'Michael', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const copeReviews = [
  new Review('211', '2', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('212', '2', 'Sarah', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('213', '2', 'Imani', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('214', '2', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const dragReviews = [
  new Review('311', '3', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('312', '3', 'Sarah', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('313', '3', 'Imani', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('314', '3', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const redReviews = [
  new Review('411', '4', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('412', '4', 'Sarah', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('413', '4', 'Imani', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('414', '4', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const outReviews = [
  new Review('511', '5', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('512', '5', 'Sarah', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('513', '5', 'Imani', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('514', '5', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
]

const pandaReviews = [
  new Review('611', '6', 'Jon', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('612', '6', 'Sarah', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('613', '6', 'Imani', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('614', '6', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const mcReviews = [
  new Review('711', '7', 'Jon', '08/31/2019', 1, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('712', '7', 'Sarah', '08/31/2019', 2, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('713', '7', 'Imani', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('714', '7', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const felReviews = [
  new Review('811', '8', 'Jon', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('812', '8', 'Sarah', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('813', '8', 'Imani', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('814', '8', 'Michael', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const chiReviews = [
  new Review('911', '9', 'Jon', '08/31/2019', 3, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('912', '9', 'Sarah', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('913', '9', 'Imani', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('914', '9', 'Michael', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];

const phoReviews = [
  new Review('1011', '10', 'Jon', '08/31/2019', 5, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('1012', '10', 'Sarah', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('1013', '10', 'Imani', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
  new Review('1014', '10', 'Michael', '08/31/2019', 4, sampleReview, 'https://img1.looper.com/img/gallery/mclovin-from-superbad-looks-totally-different-today/intro-1535553409.jpg'),
];


export const exRestaurants = [
  new Restaurant('1', 'Carrabas', [categoriesArr[1].content], true, costArr[3].content, 4, imgs.car, 3425, 'Pete Rose Blvd', [55.3426, -46.43524], carReviews),
  new Restaurant('2', 'Copelands', [categoriesArr[1].content], false, costArr[4].content, 4, imgs.cope, 23456, 'Pete Rose Blvd', [55.3426, -46.43524], copeReviews),
  new Restaurant('3', 'Dragos', [categoriesArr[2].content], false, costArr[4].content, 4, imgs.dragos, 4591, 'Pete Rose Blvd', [55.3426, -46.43524], dragReviews),
  new Restaurant('4', 'Red Lobster', [categoriesArr[2].content], true, costArr[3].content, 4, imgs.redL, 2346, 'Pete Rose Blvd', [55.3426, -46.43524], redReviews),
  new Restaurant('5', 'Outback', [categoriesArr[3].content], true, costArr[4].content, 4, imgs.outb, 324566, 'Pete Rose Blvd', [55.3426, -46.43524], outReviews),
  new Restaurant('6', 'Panda Express', [categoriesArr[4].content], false, costArr[1].content, 4, imgs.panda, 34571, 'Pete Rose Blvd', [55.3426, -46.43524], pandaReviews),
  new Restaurant('7', 'McDonalds', [categoriesArr[5].content], false, costArr[1].content, 4, imgs.mcDon, 43735, 'Pete Rose Blvd', [55.3426, -46.43524], mcReviews),
  new Restaurant('8', 'Felipe\'s', [categoriesArr[6].content], false, costArr[2].content, 4, imgs.fel, 134785, 'Pete Rose Blvd', [55.3426, -46.43524], felReviews),
  new Restaurant('9', 'Chipotle', [categoriesArr[6].content], false, costArr[3].content, 4, imgs.chi, 364545, 'Pete Rose Blvd', [55.3426, -46.43524], chiReviews),
  new Restaurant('10', 'Pho Bistro', [categoriesArr[7].content], true, costArr[4].content, 4, imgs.pho, 345672, 'Pete Rose Blvd', [55.3426, -46.43524], phoReviews),
];