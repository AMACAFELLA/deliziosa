import images from './images';

const wines = [
  {
    title: 'StrawB',
    price: '$20',
    tags: 'Strawberry | Banana',
  },
  {
    title: 'Banana Bingo',
    price: '$29',
    tags: 'Bananas | berries',
  },
  {
    title: 'Pineapple `pulse',
    price: '$24',
    tags: 'Strawberries | Pineapple',
  },
  {
    title: 'Lemon Twist',
    price: '$31',
    tags: 'Bananas | Lemon',
  },
  {
    title: 'Green Tea',
    price: '$26',
    tags: 'Green tea | Vanilla Yogurt',
  },
];

const cocktails = [
  {
    title: 'Arnold Palmer',
    price: '$20',
    tags: 'Iced tea | lemonade | soda | 30 ml',
  },
  {
    title: "Molossolini",
    price: '$16',
    tags: 'Soft drink | mixed drink | Slice of lime',
  },
  {
    title: 'Blackberry virgin mojito',
    price: '$10',
    tags: 'blackberries | granulated sugar | lime juice',
  },
  {
    title: 'Popsicle Punch',
    price: '$31',
    tags: 'lemon lime soda | mangoes | blackberries',
  },
  {
    title: 'Lime Zinger',
    price: '$26',
    tags: 'grape | strawberry | lime',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
