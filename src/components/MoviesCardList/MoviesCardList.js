import { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function debounce(delayFunction, delay) {
    let timer = null;

    return (...args) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => delayFunction(...args), delay);
    }
}

function checkIsMobile() {
    return window.innerWidth < 768;
}


function MoviesCardList({ movies, isSavedMoviesPage, checkSaveMovie, onSaveClick, onDeleteClick }) {
    const [isMobile, setIsMobile] = useState(checkIsMobile);
    const [visibleCount, setVisibleCount] = useState(() => {
        if (isSavedMoviesPage) {
            return movies.length;
        }

        return Math.min(isMobile ? 5 : 7, movies.length);
    }); // отображение на разной ширине

    useEffect(() => {
        const resize = debounce(() => setIsMobile(checkIsMobile()), 100);

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])


    // отображение ошибок
    if (!movies.length) {
        return (
            <p className='movies-list__error'>Ничего не найдено.</p>
        )
    };

    return (
        <section className='movies-list'>
            <ul className='movies-list__wrapper'>
                {movies.slice(0, visibleCount).map((movie) => (
                    <MoviesCard
                        key={movie._id || movie.id}
                        movie={movie}
                        isSavedMoviesPage={isSavedMoviesPage}
                        isSavedMovie={checkSaveMovie}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick}
                    />
                ))
                }
            </ul>
            {visibleCount < movies.length ? (
                <button
                    className='movies-list__button'
                    type='button'
                    onClick={() => setVisibleCount(
                        Math.min(
                            visibleCount + (isMobile ? 5 : 7),
                            movies.length
                        ))
                    }
                >
                    Еще
                </button>
            ) : null}
        </section>
    )
}

export default MoviesCardList;