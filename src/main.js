import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/grid.scss'
import 'viewerjs/dist/viewer.min.css'

createApp(App).use(router).mount('#app')
