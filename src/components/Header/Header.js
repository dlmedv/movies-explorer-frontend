import './Header.css';
import logo from '../../images/logo.svg'
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader/MobileHeader';

function Header() {
    const [isDesktop, setIsDesktop] = useState(true);

    function debounce(delayFunction, delay) {
        let timer = null;

        return (...args) => {
            if (timer !== null) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => delayFunction(...args), delay);
        }
    }

    useEffect(() => {
        const resize = debounce(() => {
            setIsDesktop(window.innerWidth > 768);
        }, 100);

        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    return (
        <Routes>
            <Route path='/' element={
                <header className='header'>
                    <Link to='/'>
                        <img className='header__logo' src={logo} alt='логотип' />
                    </Link>
                    <div className='header__info'>
                        <Link to='/signup' className=' header__link header__link_sign-up'>
                            Регистрация
                        </Link>
                        <Link to='/signin' className=' header__link header__link_sign-in'>
                            Войти
                        </Link>
                    </div>
                </header>
            } />
            <Route path='/movies' element={
                <header className='header header_gray'>
                    <Link to='/'>
                        <img className='header__logo' src={logo} alt='логотип' />
                    </Link>
                    {isDesktop ? (<div className='header__info'>
                        <Link to='/movies' className='header__link header__link_gray'>
                            Фильмы
                        </Link>
                        <Link to='/saved-movies' className='header__link header__link_gray'>
                            Сохраненные фильмы
                        </Link>
                        <Link to='/profile' className='header__link-account'>
                            <p className='header__link header__link_gray'>Аккаунт </p>
                            <div className='header__link-icon'></div>
                        </Link>
                    </div>) : <MobileHeader />}
                </header>
            } />
            <Route path='/saved-movies' element={
                <header className='header header_gray'>
                    <Link to='/'>
                        <img className='header__logo' src={logo} alt='логотип' />
                    </Link>
                    {isDesktop ? (<div className='header__info'>
                        <Link to='/movies' className='header__link header__link_gray'>
                            Фильмы
                        </Link>
                        <Link to='/saved-movies' className='header__link header__link_gray'>
                            Сохраненные фильмы
                        </Link>
                        <Link to='/profile' className='header__link-account'>
                            <p className='header__link header__link_gray'>Аккаунт </p>
                            <div className='header__link-icon'></div>
                        </Link>
                    </div>) : <MobileHeader />}
                </header>
            } />
            <Route path='/profile' element={
                <header className='header header_gray'>
                    <Link to='/'>
                        <img className='header__logo' src={logo} alt='логотип' />
                    </Link>
                    {isDesktop ? (<div className='header__info'>
                        <Link to='/movies' className='header__link header__link_gray'>
                            Фильмы
                        </Link>
                        <Link to='/saved-movies' className='header__link header__link_gray'>
                            Сохраненные фильмы
                        </Link>
                        <Link to='/profile' className='header__link-account'>
                            <p className='header__link header__link_gray'>Аккаунт </p>
                            <div className='header__link-icon'></div>
                        </Link>
                    </div>) : <MobileHeader />}
                </header>
            } />
            <Route path='/signin' element={null}/>
            <Route path='/signup' element={null}/>
        </Routes>
    )
}

export default Header;