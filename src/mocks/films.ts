export type Duration = {
  hours: number;
  minutes: number;
  seconds: number;
}

export type Detail = {
  filmYear: number;
  genre: string;
  ratingScore: number;
  ratingLevel: string;
  ratingCount: string;
  director: string;
  starring: string[];
  description: string;
  duration: Duration;
}


export type Film = {
  id: string;
  filmName: string;
  videoSrc: string;
  image: string;
  backgroundImage: string;
  details: Detail;
};

export const films: Film[] = [
  {
    id: '0',
    filmName: 'The Grand Budapest Hotel',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '1',
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '2',
    filmName: 'Bohemian Rhapsody',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '3',
    filmName: 'Macbeth',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '4',
    filmName: 'Aviator',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '5',
    filmName: 'We need to talk about Kevin',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '6',
    filmName: 'What We Do in the Shadows',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }, {
    id: '7',
    filmName: 'Revenant',
    videoSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    image: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    details: {
      filmYear: 2014,
      genre: 'Drama',
      ratingScore: 8.9,
      ratingLevel: 'Very good',
      ratingCount: '240 ratings',
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan',
        'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.\nGustave prides himself on providing first-class
      service to the hotel&aposs guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      duration: {
        hours: 1,
        minutes: 39,
        seconds: 55
      }
    }
  }
];
