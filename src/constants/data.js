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
    subtitle: 'Excellence in South African cuisine. We will strive to maintain and improve this standard of excellence, and continue to provide you with the best food and service.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Groundbreaking seasonal cuisine and fermentation sorcery from the world’s most future-gazing chef.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: ' The award represents a fantastic achievement for all of our staff, who have worked tirelessly throughout the year to ensure that Macafellas continues to offer an exceptional dining experience to all of its guests.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Kevin Luo won the outstanding chef Award for his South African style of cooking.',
  },
];

export default { wines, cocktails, awards };
