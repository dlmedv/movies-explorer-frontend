import './MoviesCard.css';

function MoviesCard({ card, isSavedMoviesPage }) {
    return (
        <li className='movies-card'>
            <div className='movies-card__info'>
                <h2 className='movies-card__title'>{card.nameRU}</h2>
                <p className='movies-card__time'>
                    {Math.floor(card.duration / 60)}ч {card.duration - 60 * Math.floor(card.duration / 60)}м
                </p>
                {isSavedMoviesPage ? (
                    <button className='movies-card__button movies-card__button_delete' type='button'></button>
                ) : (
                    <button className='movies-card__button movies-card__button_active' type='button'></button>
                )}
            </div>
            <a href={card.trailerLink}
                target="_blank"
                rel="noreferrer"
                className='movies-card__link'
            >
                <img className='movies-card__poster' src={card.image} alt='обложка фильма "33 слова о дизайне"' />
            </a>
        </li>
    )
}

export default MoviesCard;