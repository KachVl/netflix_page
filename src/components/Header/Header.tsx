import './Header.scss';

import logo from './images/logo.svg';
import profileImg from './images/profile-img.png';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__left-container'>
        <a href='https://www.netflix.com/' target='_blank'>
        <img
          className='header__logo'
          alt='Netflix Logo'
          src={logo} 
        />
        </a>
        

        <div className='header__stroke'></div>

        <div className='header__date'>Friday July 8th</div>
      </div>

      <div className='header__right-container'>
        <button className='header__search-button'></button>

        <div className='header__profile'>
          <img
            className='header__profile__img'
            alt='profile image'
            src={profileImg}   
          />
        </div>
      </div>
    </header>
  )
};
