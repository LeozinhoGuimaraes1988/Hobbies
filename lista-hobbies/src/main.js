import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Hobbies from './components/Hobbies.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Hobbies }],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
