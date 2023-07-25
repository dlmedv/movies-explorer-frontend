import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';

function Movies({ cards }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитируем загрузку данных в течение 2 секунд
    setTimeout(() => {
      setIsLoading(false); // прелоадер в false через 2 секунды
    }, 2000);
  }, []);


  return (
    <>
      <main>
        <section className='movies'>
          <SearchForm />
          <FilterCheckbox />
          {isLoading ? <Preloader /> : null}
          <MoviesCardList
            cards={cards}
            isSavedMoviesPage={false}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;