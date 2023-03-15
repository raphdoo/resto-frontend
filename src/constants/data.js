import images from './images';

const foods = [
  {
    title: 'Amala and Egusi',
    price: '$25',
    tags: 'Swallow',
  },
  {
    title: 'Pizza',
    price: '$15',
    tags: 'Fast_food',
  },
  {
    title: 'Moin moin',
    price: '$10',
    tags: 'Meal',
  },
  {
    title: 'Jollof Rice',
    price: '$10',
    tags: 'Meal',
  },
  {
    title: 'Pounded yam',
    price: '$15',
    tags: 'Swallow',
  },
];

const fruits = [
  {
    title: 'Banana',
    price: '$5',
    tags: 'Fruits',
  },
  {
    title: "Pineapple",
    price: '$7',
    tags: 'Fruits',
  },
  {
    title: 'Apple',
    price: '$8',
    tags: 'Fruits',
  },
  {
    title: 'Orange',
    price: '$5',
    tags: 'BFruits',
  },
  {
    title: 'Mango',
    price: '$26',
    tags: 'Fruits',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Top Chef',
    subtitle: 'Top Chef in the country.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Rising Star chef in the country.',
  },
  {
    imgUrl: images.award05,
    title: 'Agba cooker',
    subtitle: 'Kukuruku, cook that thing.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Oustanding chef of the year.',
  },
];

// eslint-disable-next-line
export default { foods, fruits, awards };
