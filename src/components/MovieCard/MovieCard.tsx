import './MovieCard.scss';

import { Movie } from "../../types/Movie";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  movie: Movie,
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const {
    genre,
    title,
    year,
    director,
    seasons,
    description,
    rating,
    streamLink,
    allEpisodesLink,
    ageReastriction
  } = movie;

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, (title.length * (1000 / 20) + 250)) // Calculating title animation end
  })

  return (
    <article className="movie">
      <div className={`movie__genres ${isHidden ? 'hidden' : ''}`}>
        {<span className="movie__genre">{genre.join(' | ')}</span>}
      </div>

      <h2 className="movie__title">
        {title.split('').map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 20,
            }}
            key={i}
          >
            {el}{""}
          </motion.span>
        ))}
      </h2>

      <div className={`movie__details ${isHidden ? 'hidden' : ''}`}>
        <span className="movie__year">{year}</span>

        <div className="movie__details-stroke"></div>

        <span className="movie__director">
          <span className="movie__director-title">DIRECTOR: </span>
          {director}
        </span>

        {seasons && (
          <>
            <div className="movie__details-stroke"></div>

            <span className="movie__seasons">
              <span className="movie__seasons-title">seasons: </span>
              {seasons}
            </span>
          </>
        )}
      </div>

      <p className={`movie__description ${isHidden ? 'hidden' : ''}`}>
        {description}
      </p>

      <div className={`movie__rating ${isHidden ? 'hidden' : ''}`}>
        <div 
          className={`movie__rating-star ${rating >= 1 ? 'movie__rating-star--filled' : ''}`}
        ></div>
        <div 
          className={`movie__rating-star ${rating >= 2 ? 'movie__rating-star--filled' : ''}`}
        ></div>
        <div 
          className={`movie__rating-star ${rating >= 3 ? 'movie__rating-star--filled' : ''}`}
        ></div>
        <div 
          className={`movie__rating-star ${rating >= 4 ? 'movie__rating-star--filled' : ''}`}
        ></div>
        <div 
          className={`movie__rating-star ${rating > 4 ? 'movie__rating-star--filled' : ''}`}
        ></div>
      </div>

      <div className={`movie__buttons ${isHidden ? 'hidden' : ''}`}>
        <a href={streamLink} target='_blank'>
          <div className="movie__button movie__button--stream">
            <span>STREAM NOW</span>
            <div className='movie__button--stream-icon'></div>
          </div>
        </a>

        <a href={allEpisodesLink} target='_blank'>
          <div className="movie__button movie__button--all">
            ALL EPISODES
          </div>
        </a>
      </div>

      {ageReastriction && (
        <div className='movie__age'>
          <div className='movie__age-red-square'></div>
          <span className='movie__age-title'>{ageReastriction}+</span>
        </div>
      )}  
      
    </article>
  );
};
