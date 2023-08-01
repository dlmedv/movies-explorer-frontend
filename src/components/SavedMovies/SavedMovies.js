import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ cards }) {
    return (
        <>
        <main>
                <section className='saved-movies'>
                    <SearchForm />
                    <FilterCheckbox />
                    <MoviesCardList
                        cards={cards}
                        isSavedMoviesPage={true}
                    />
                </section>
                </main>
            <Footer />
        </>
    )
}

export default SavedMovies;