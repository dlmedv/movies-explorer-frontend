import { BEATFILM_URL } from './constants';

 export default class MoviesApi {
    constructor(options) {
        this._url = options.url;
        this._header = options.headers;
    };

    _checkStatusRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getMovies() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        })
            .then((res) => this._checkStatusRes(res));
    };
};

export const moviesApi = new MoviesApi(BEATFILM_URL);