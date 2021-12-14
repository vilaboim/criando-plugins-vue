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
    function getRandomList (key = '', type) {
      const listTypes = {
        movie: movies,
        director: directors
      }

      const item = listTypes[type][Math.floor(Math.random() * listTypes[type].length)]

      return !key ? item : item[key]
    }

    const horror = {
      directors,
      movies,
      getRandomList
    }

    app.config.globalProperties.$horror = horror
    app.provide('$horror', horror)

    app.directive('horror', {
      beforeMount(el, binding) {
        el.textContent = getRandomList('name', binding.value)
      }
    })
  }
}
