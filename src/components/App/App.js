import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { useState, useEffect } from 'react';
import * as auth from '../../utils/auth';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

function App() {
  const [initialized, setInitialized] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '' }) // глобальный стейт с данными 
  const [loggedIn, setLoggedIn] = useState(false) // стейт проверки статуса пользователя 
  const [token, setToken] = useState(false) // стейт проверки токена
  const [registerError, setRegisterError] = useState('')
  const [loginError, setLoginError] = useState('')
  const [profileError, setProfileError] = useState('')
  const [profileSuccess, setProfileSuccess] = useState('')
  const navigate = useNavigate();

  //проверка токена 
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setInitialized(true);
      setToken(true);
      return;
    }
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setToken(true);
            setCurrentUser({ name: res.name, email: res.email, _id: res._id });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setInitialized(true))
    }
  }, [loggedIn]);

  //авторизация
  const loginUser = ({ email, password }) => {
    auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setToken(res.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true })
        }
      })
      .catch(err => {
        if (err.message === 'Ошибка: 401') {
          setLoginError('Вы ввели неправильный логин или пароль');
        }
        if (err.message === 'Ошибка: 500') {
          setLoginError('На сервере произошла ошибка');
        }
      })
  };

  //регистрация
  const registerUser = ({ name, email, password }) => {
    auth.register(name, email, password)
      .then((res) => {
        loginUser({ email, password });
      })
      .catch(err => {
        if (err.message === 'Ошибка: 409') {
          setRegisterError('Пользователь с таким email уже существует');
        }
        if (err.message === 'Ошибка: 500') {
          setRegisterError('На сервере произошла ошибка');
        }
      })
  };

  //редактирование профиля
  const profileUser = ({ name, email }) => {
    mainApi.setUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setProfileSuccess('Информация обновлена!');
      })
      .catch(err => {
        if (err.message === 'Ошибка: 409') {
          setProfileError('Пользователь с таким email уже существует');
        } else {
          setProfileError('При обновлении профиля произошла ошибка');
        }
      })
  };

  //выход из аккаунта
  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '', _id: '' });
    navigate('/', { replace: true });
  }
  // очистка ошибок
  const cleaner = () => {
    setRegisterError('');
    setLoginError('');
    setProfileSuccess('');
    setProfileError('');
  }

  if (!initialized) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="app">
        <div className='app__container'>
          <Header loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/movies" element={<ProtectedRouteElement element={Movies} loggedIn={loggedIn} />} />
            <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} />} />
            <Route path="/profile" element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                profileUser={profileUser}
                profileError={profileError}
                profileSuccess={profileSuccess}
                logOut={logOut}
                cleaner={cleaner}
              />} />
            {!loggedIn && <Route path="/signin" element={
              <Login
                loginUser={loginUser}
                loginError={loginError}
                cleaner={cleaner}
              />} />}
            {!loggedIn && <Route path="/signup" element={
              <Register
                registerUser={registerUser}
                registerError={registerError}
                cleaner={cleaner}
              />} />}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );

}

export default App;
