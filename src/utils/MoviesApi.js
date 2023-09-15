class MoviesApi {
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

      getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
          headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-type': 'application/json'
          },
        })
          .then(res => this._chekResult(res))
      }
    }


export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {},
})