import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'top',
    component: async () => {
      const top = await import('../pages/Top.vue');
      return top;
    }
  },
  {
    path: '/page1',
    name: 'page1',
    component: async () => {
      const page1 = await import('../pages/Page1.vue');
      return page1;
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
