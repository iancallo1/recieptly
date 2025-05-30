import { createRouter, createWebHistory } from 'vue-router'
import InvoiceForm from '../pages/forms/InvoiceForm.vue'
import History from '../pages/tables/history.vue'

const routes = [
  { path: '/receipts', name: 'receipts', component: InvoiceForm },
  { path: '/history', name: 'history', component: History },
  { path: '/', redirect: '/receipts' }
]

export default createRouter({
  history: createWebHistory(),
  routes
}) 