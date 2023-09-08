export const BASE_URL = 'https://api.find.your.film.nomoreparties.co';

function chekResult(res) {
    if (res.ok) {
      return res.json();
    }
    
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`); 
  }

  export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    }).then((res) => chekResult(res))
}

export const authorization = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      }).then((res) => chekResult(res))
  }

  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
   method: 'GET',
   headers: {
         "Content-Type": "application/json",
         "Authorization" : `Bearer ${token}`
     
   }
 }).then((res) => chekResult(res))
   }
