import cardPic from '../images/pic__COLOR_card.png'

const movieTime = 40;

export function findMoviesName (movies, name) {
    return movies.filter((data) => {
      return data.nameRU.toLowerCase().includes(name.toLowerCase())
    })
  }
  
  export function findMoviesTime (movies) {
    return movies.filter((data) => {
      return data.duration <= movieTime
    })
  }
// export const cards = [
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
//   {
//     name: '33 слова о дизайне',
//     time: '1ч42м',
//     image: cardPic,
//   },
// ]