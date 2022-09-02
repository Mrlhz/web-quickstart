import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/grid.scss'
import 'viewerjs/dist/viewer.min.css'

import '@/assets/stylesheets/page.scss'
import '../packages/theme/index.scss'

createApp(App).use(store).use(router).mount('#app')
