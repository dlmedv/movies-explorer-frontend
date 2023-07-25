import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import poster from '../../images/poster.jpg';

function MoviesCardList({ cards, isSavedMoviesPage }) {

    const testCard = {
        country: "Англия",
        director: "лучшее",
        duration: 307,
        year: "2010",
        description: "Кино про дизайн",
        image: poster,
        trailerLink: "https://youtu.be/JORGN8rUjyQ?t=4",
        thumbnail: poster,
        movieId: 12345679,
        nameRU: "33 слова о дизайне",
        nameEN: "33 words about design"

    }

    return (
        <section className='movies-list'>
            <ul className='movies-list__wrapper'>
                {cards.map((card, index) => (
                    <MoviesCard
                        key={index}
                        card={testCard}
                        isSavedMoviesPage={isSavedMoviesPage}
                    />
                ))
                }
            </ul>
            <button className='movies-list__button' type='button'>Еще</button>
        </section>
    )
}

export default MoviesCardList;