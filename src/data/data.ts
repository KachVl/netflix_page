import { Movie } from "../types/Movie";
import { ReccomendedMovie } from "../types/ReccomendedMovie";

export const movie: Movie = {
  id: 1,
  title: 'Stranger Things',
  genre: ['Drama', 'Thriller', 'Supernatural'],
  ageReastriction: 16,
  year: 2019,
  director: 'Shawn Levy',
  seasons: '3 (5 Episodes)',
  description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
  rating: 3,
  streamLink: 'https://www.netflix.com/title/80057281',
  allEpisodesLink: 'https://www.netflix.com/title/80057281',
};

export const reccomended: ReccomendedMovie[] = [
  { 
    id: 2,
    imgUrl: './images/2.jpg',
    link: 'https://www.netflix.com/',
  },
  { 
    id: 3,
    imgUrl: './images/3.png',
    link: 'https://www.netflix.com/',
  },
  { 
    id: 4,
    imgUrl: './images/4.png',
    link: 'https://www.netflix.com/',
  },
  { 
    id: 5,
    imgUrl: './images/5.png',
    link: 'https://www.netflix.com/',
  },
  { 
    id: 6,
    imgUrl: './images/6.png',
    link: 'https://www.netflix.com/',
  },
  { 
    id: 7,
    imgUrl: './images/7.png',
    link: 'https://www.netflix.com/',
  },
]
