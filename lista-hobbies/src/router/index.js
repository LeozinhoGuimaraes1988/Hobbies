import { createRouter, createWebHistory } from 'vue-router';
import HobbiesDetails from '../views/HobbiesDetails.vue';

const routes = [
  {
    path: '/',
    name: 'hobbies',
    component: Hobbies,
  },
  {
    path: '/hobbies/:hobby',
    name: 'hobbyDetails',
    component: HobbiesDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
