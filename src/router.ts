import { createRouter, createWebHistory } from 'vue-router';

import Greet from '~/components/Greet.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Greet }
  ]
});
