import { createApp } from 'vue'
import App from './App.vue'
import horror from '@/plugins/horror'

createApp(App)
  .use(horror)
  .mount('#app')
