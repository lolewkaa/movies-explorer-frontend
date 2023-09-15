class MainApi {
    constructor({ baseUrl, headers }){
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _chekResult(res) {
        if (res.ok) {
          return res.json();
        }
        
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`); 
      }

      getUserInfo(){
        //создаем запрос на сервер и возвращаем его ответ
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-type': 'application/json'
          }
        }).then(res => this._chekResult(res))
    }

    

      changeUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              name,
              email,
            })
          })
          .then(res => this._chekResult(res))
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-type': 'application/json'
          },
        })
          .then(res => this._chekResult(res))
      }

      postNewMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
              'Content-type': 'application/json'
            },
              body: JSON.stringify(movie),
        }).then(res => this._chekResult(res))
    }

    deleteMovie(movieId){
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-type': 'application/json'
          },
      }).then(res => this._chekResult(res))
      }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.find.your.film.nomoreparties.co',
  headers: {},
})


