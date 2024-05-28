import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/income',
      name: 'income',
      component: () => import('../views/IncomeView.vue')
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('../views/BudgetView.vue')
    },
        {
      path: '/expense',
      name: 'expense',
      component: () => import('../views/ExpenseView.vue')
    },
  ]
})

export default router
