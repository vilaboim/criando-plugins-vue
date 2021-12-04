import { createApp } from 'vue'
import App from './App.vue'
import hello from '@/plugins/hello'

createApp(App)
  .use(hello)
  .mount('#app')
