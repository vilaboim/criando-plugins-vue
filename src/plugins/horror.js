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
    app.config.globalProperties.$horror = {
      directors,
      movies
    }
  }
}
