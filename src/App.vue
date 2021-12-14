<template>
  <h1 v-horror />

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
    const { directors } = inject('$horror')

    return {
      directors
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
