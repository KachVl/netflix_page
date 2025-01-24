import './Carousel.scss';

import { ReccomendedMovie } from '../../types/ReccomendedMovie';
import { useState } from 'react';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';


type Props = {
  movies: ReccomendedMovie[]
}

export const Carousel: React.FC<Props> = ({ movies }) => {
  const [translate, setTranslate] = useState(0);
  const { width } = useWindowDimensions();

  const currentGap = getGapSize(width); // To find current gap between movies images
  const visibleImgs = getVisibleImagesNumber(width);
  const maxTranslate = movies.length - visibleImgs;

  const handleButtonsClick = (direction: string) => {
    if (direction === 'left') {
      if (translate === 0) {
        return;
      }

      setTranslate(translate - 1);

      return; 
    }

    if (translate >= maxTranslate) {
      return;
    }

    setTranslate(translate + 1);
  }

  return (
    <div className='carousel'>
      <div className='carousel__top'>
        <h3 className='carousel__title'>
          Popular this week
        </h3>

        <div className='carousel__buttons'>
          <button 
            className='carousel__button carousel__button--left'
            onClick={() => handleButtonsClick('right')}
          ></button>
          <button
            className='carousel__button carousel__button--right'
            onClick={() => handleButtonsClick('left')}
          ></button>
        </div>
      </div>

      <div 
        className='carousel__bottom'
        style={{ 
          transform: `translatex(${translate * (150 + currentGap)}px)`,
        }}
      >
        {movies.map((movie: ReccomendedMovie) => {
          return (
            <div className='carousel__movie' key={movie.id}>
              <a href={movie.link} target='_blank'>
                <img 
                  className='carousel__movie-image' 
                  alt={`${movie.id} image`}
                  src={movie.imgUrl}
                />  
              </a> 
            </div>
          )
        })}
      </div>
    </div>
  )
};

function getGapSize(width: number) {
  let currentGap;

  if (width < 640) {
    currentGap = 6.5 * 4;             //fontSize * 4rem
  } else if (width < 1023) {
    currentGap = 7 * 4;
  } else {
    currentGap = 10 * 4;
  };

  return currentGap;
}

function getVisibleImagesNumber(width: number) {
  if (width < 540) { return 2 }
  if (width < 760) { return 3 }
  if (width < 940) { return 4 }
  if (width < 1024) { return 5 }
  if (width < 1460) { return 3 }
  if (width < 1810) { return 4 }
  if (width < 2150) { return 5 }

  return 6;
}
