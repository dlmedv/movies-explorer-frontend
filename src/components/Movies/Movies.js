import { useState, useEffect, useCallback } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
  const [value, setValue] = useState('');
  const [short, setShort] = useState(false);

  const [isLoadingPreloader, setIsLoadingPreloader] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [results, setResults] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

  const onShortChange = useCallback(() => {
    setShort((oldShort) => {

      localStorage.setItem(
        'movies',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('movies')) || {},
          short: !oldShort,
        }));

      return !oldShort;
    });
  }, []);

  const onSearch = useCallback(() => {
    if (isLoadingPreloader) {
      return;
    }

    const updateResults = (items, value, short) => {
      if (items === null) {
        return;
      }

      const result = items
        .filter((item) =>
          item.nameRU.toLowerCase().includes(value.toLowerCase())
          || item.nameEN.toLowerCase().includes(value.toLowerCase())
        );

      setResults(result);

      localStorage.setItem(
        'movies',
        JSON.stringify({
          value,
          short,
          movies: result,
        }));
    }

    if (!movies) {
      setIsLoadingPreloader(true);

      moviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          updateResults(res, value, short);
        })
        .catch(() => {
          setResults(null);
          setHasError(true);
        })
        .finally(() => setIsLoadingPreloader(false))
    } else {
      updateResults(movies, value, short);
    }
  }, [isLoadingPreloader, value, short, movies]);

  useEffect(() => {
    try {
      const storage = JSON.parse(localStorage.getItem('movies'));

      if (storage != undefined && typeof storage === 'object') {
        if (typeof storage.value === 'string') {
          setValue(storage.value);
        }

        setShort(Boolean(storage.short));

        if (Array.isArray(storage.movies)) {
          setResults(storage.movies);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    mainApi.getMovies()
      .then((response) => {
        setSavedMovies(response);
      })
      .catch((err) => console.log)
  }, []);

  //сохранение понрав фильмов
  const handleSavedMovies = (movie) => {
    mainApi.saveMovies(movie)
      .then((res) => setSavedMovies([res, ...savedMovies]))
      .catch((err) => console.log(err))
  }

  //проверка сохраненных фильмов
  function handleCheckSaveMovie(movie) {
    return savedMovies.some((elm) => elm.movieId === movie.id)
  }

  //удаление понрав фильмов
  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie.id)
      .then(() => {
        setSavedMovies(savedMovies.filter((elm) => elm.id !== movie.id))
      })
      .catch((err) => console.log(err));
  }

  const visibleResults = (results || []).filter((movie) => short ? movie.duration <= 40 : true);

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
          {isLoadingPreloader ? <Preloader /> : null}
          {!isLoadingPreloader && results ? (
            <MoviesCardList
              key={visibleResults.length}
              movies={visibleResults}
              isSavedMoviesPage={false}
              onSaveClick={handleSavedMovies}
              checkSaveMovie={handleCheckSaveMovie}
              onDeleteClick={handleDeleteMovie}
            />
          ) : null}
          {hasError ? (
            <p className='movies__error'>
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;