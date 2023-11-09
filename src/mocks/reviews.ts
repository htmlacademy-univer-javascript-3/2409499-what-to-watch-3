export type Review = {
  author: string;
  date: string;
  reviewRating: number;
  reviewText: string;
}

export const reviews: Review[] = [
  {
    author: 'Kate Muir',
    date: 'December 24, 2016',
    reviewRating: 8.9,
    reviewText: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&aposs funniest and most exquisitely designed films in years.'
  }, {
    author: 'Bill Goodykoontz',
    date: 'November 18, 2015',
    reviewRating: 8.0,
    reviewText: 'Anderson&aposs films are too precious for some, but for those of us willing to lose ourselves in them, they&aposre a delight. &quotThe Grand Budapest Hotel&quot is no different, except that he has added a hint of gravitas to the mix, improving the recipe.'
  }, {
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    reviewRating: 8.0,
    reviewText: 'I didn&apost find it amusing, and while I can appreciate the creativity, it&aposs an hour and 40 minutes I wish I could take back.'
  }, {
    author: 'Matthew Lickona',
    date: 'December 20, 2016',
    reviewRating: 7.2,
    reviewText: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'
  }, {
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    reviewRating: 7.6,
    reviewText: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
  }, {
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    reviewRating: 7.0,
    reviewText: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
  }
];
