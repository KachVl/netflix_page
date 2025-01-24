export type Movie = {
  id: number,
  title: string,
  genre: string[];
  ageReastriction: number | null,
  year: number,
  director: string,
  seasons: string | null,
  description: string,
  rating: number,
  streamLink: string,
  allEpisodesLink: string,
};
