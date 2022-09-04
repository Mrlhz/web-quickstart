import { createRouter, createWebHistory } from 'vue-router';
import Series from '../views/Series.vue';

const routes = [
  {
    path: '/:type',
    name: 'Star',
    component: Series,
    props: true
  },
  {
    path: '/downloaded',
    name: 'Downloaded',
    component: () => import('../views/Downloaded.vue')
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: () => import('../views/ToDo.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/star',
  //   name: 'Star',
  //   component: () => import('../views/Star.vue'),
  // },
  // {
  //   path: '/series',
  //   name: 'Series',
  //   component: () => import('../views/Series.vue')
  // },
  {
    path: '/starList',
    name: 'StarList',
    component: () => import('../views/StarList.vue'),
    meta: {
      title: 'StarList',
      keepAlive: true, // 需要缓存
      scroll: 0
    }
  },
  {
    path: '/starDetail',
    name: 'StarDetail',
    component: () => import('../views/StarDetail.vue')
  },
  // 学习demo
  {
    path: '/drag',
    name: 'Drag',
    component: () => import('../components/Drag.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../components/CardList.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

console.log(process.env)
export default router;
