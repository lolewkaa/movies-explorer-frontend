import cardPic from '../images/pic__COLOR_card.png'

  const SCREEN_320 = 728;
  const SCREEN_768 = 857;
  const CARDS_SCREEN_1280 = 16;
  const CARDS_SCREEN_768 = 8;
  const CARDS_SCREEN_320 = 5;
  const MORE_1280 = 4;
  const MORE_768 = 2;

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

export {
  SCREEN_320,
  SCREEN_768 ,
  CARDS_SCREEN_1280, 
  CARDS_SCREEN_768, 
  CARDS_SCREEN_320, 
  MORE_1280, 
  MORE_768, 
}