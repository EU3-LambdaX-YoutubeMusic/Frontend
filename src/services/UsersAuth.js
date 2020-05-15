import axios from 'axios';

export const login = user => {
    return axios
        .post('https://lambda-youtube-music.herokuapp.com/api/v1/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            window.localStorage.setItem('user', JSON.stringify(res.data));
            return new Promise((resolve, reject) => {
                resolve();
            })
        })
        .catch(() => {
            return new Promise((resolve, reject) => {
                reject();
            })
        })
}


export const signup = newUser => {
    return axios
        .post('https://lambda-youtube-music.herokuapp.com/api/v1/users/register', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password
        })
        .then(() => {
            login(newUser);
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                resolve();
            })
        })
        .catch(() => {
            return new Promise((resolve, reject) => {
                reject();
            })
        })
}