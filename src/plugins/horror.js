const directors = [
  {
    id: '1',
    name: 'George Romero',
  },
  {
    id: '2',
    name: 'John Carpenter',
  },
]

const movies = [
  {
    id: '1',
    name: 'Night of the Living Dead',
    director: '1'
  },
  {
    id: '2',
    name: 'Halloween',
    director: '2'
  },
]

export default {
  install: (app) => {
    function getRandomDirector (key = '') {
      const director = directors[Math.floor(Math.random() * directors.length)]

        return !key ? director : director[key]
    }

    const horror = {
      directors,
      movies,
      getRandomDirector
    }

    app.config.globalProperties.$horror = horror
  }
}
