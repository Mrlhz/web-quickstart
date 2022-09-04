import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store'

import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/grid.scss'
import 'viewerjs/dist/viewer.min.css'

import '@/assets/stylesheets/page.scss'
import '../packages/theme/index.scss'

// createApp(App).use(pinia).use(router).mount('#app')

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
