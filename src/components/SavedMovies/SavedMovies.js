import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState, useEffect, useCallback } from 'react';
import { mainApi } from '../../utils/MainApi';

function SavedMovies() {
  const [value, setValue] = useState('');
  const [short, setShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [results, setResults] = useState(null);

  const updateResults = useCallback((items, value, short) => {
    const result = items.filter((item) =>
    (
      item.nameRU.toLowerCase().includes(value.toLowerCase())
      || item.nameEN.toLowerCase().includes(value.toLowerCase())
    )
    ).filter((movie) => short ? movie.duration <= 40 : true);

    setResults(result);
  }, [])

  const onShortChange = useCallback(() => {
    const newShort = !short;
    updateResults(movies, value, newShort);
    setShort(newShort);
  }, [short, value, movies]);

  const onSearch = useCallback(() => {
    updateResults(movies, value, short);
  }, [movies, value, short]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((response) => {

        setMovies(response);
        setResults(response);
      })
      .catch((err) => {
        setHasError(true)
      })
      .finally(() => setIsLoading(false));
  }, []);

  function handleCheckSaveMovie(movie) {
    return movies.some((elm) => elm.movieId === movie.id)
  };

  //удаление понрав фильмов
  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setMovies((oldValues) => oldValues.filter((item) => item._id !== movie._id))
        setResults((oldValues) => oldValues.filter((item) => item._id !== movie._id))
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return null;
  };

  return (
    <>
      <main>
        <section className='movies'>
          <SearchForm
            value={value}
            short={short}
            onChange={setValue}
            onShortChange={onShortChange}
            onSearch={onSearch}
            checkSaveMovie={handleCheckSaveMovie}
          />
          {results ? (
            <MoviesCardList
              key={results.length}
              movies={results}
              isSavedMoviesPage={true}
              onDeleteClick={handleDeleteMovie}
            />
          ) : null}
          {hasError ? (
            <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;