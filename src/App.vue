<template>
  <h1>{{getRandomDirector('name')}}</h1>
  <ul>
    <li v-for="director in directors" :key="director.id">
      {{director.name}}
    </li>
  </ul>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'App',
  setup() {
    const { directors, getRandomDirector } = inject('$horror')

    return {
      directors,
      getRandomDirector
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
