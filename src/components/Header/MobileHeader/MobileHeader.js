import { useState } from 'react';
import './MobileHeader.css';
import { Link } from 'react-router-dom';

function MobileHeader() {
  const [opened, setOpened] = useState(false);

  function openBurger() {
    setOpened(true);
  };

  function closeBurger() {
    setOpened(false);
  };

  return (
    <div className='header-mobile'>
      <button
        type='button'
        className='header-mobile__button header-mobile__button_open'
        onClick={openBurger}
      >
      </button>
      {opened ? (
        <>
          <div className="header-mobile__background" />
          <div className=" header-mobile__content">
            <div className="header-mobile__menu">
              <button
                type='button'
                onClick={closeBurger}
                className='header-mobile__button header-mobile__button_close'></button>
              <Link to='/' className=' header__link header__link_mobile'>
                Главная
              </Link>
              <Link to='/movies' className=' header__link header__link_mobile'>
                Фильмы
              </Link>
              <Link to='/saved-movies' className=' header__link header__link_mobile'>
                Сохраненные фильмы
              </Link>
              <Link to='/' className='header__link-account header__link-account_mobile'>
                <p className=' header__link header__link_mobile'>Аккаунт </p>
                <div className='header__link-icon'></div>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default MobileHeader;