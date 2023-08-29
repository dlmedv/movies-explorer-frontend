import { MOVIE_URL } from "./constants";

export default class MainApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    };

    _checkStatusRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    getMovies() {
        return fetch(`${this._url}/movies`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then((res) => this._checkStatusRes(res))
    };

    saveMovies(item) {
        const movie = {
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: `https://api.nomoreparties.co/${item.image.url}`,
            trailerLink: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN
        }
        return fetch(`${this._url}/movies`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'POST',
            body: JSON.stringify(movie)
        })
            .then((res) => this._checkStatusRes(res))
    };

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'DELETE',
        })
            .then((res) => this._checkStatusRes(res))
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'GET',
        })
            .then((res) => this._checkStatusRes(res))
    };

    setUserInfo(name, email) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((res) => this._checkStatusRes(res))
    };
};

export const mainApi = new MainApi(MOVIE_URL);