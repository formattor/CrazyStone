import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Fresh from '../components/Fresh.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/message',
    component: Fresh,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
