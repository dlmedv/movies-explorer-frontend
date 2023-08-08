import { BASE_URL } from "./constants";

export const checkStatusRes = (res) => {
    if (res.ok) {
        return res.json()
    }
    throw new Error(`Ошибка: ${res.status}`)
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(checkStatusRes)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkStatusRes)
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(checkStatusRes)
};