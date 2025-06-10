import { createRouter, createWebHistory } from 'vue-router'
import InvoiceForm from '../pages/forms/InvoiceForm.vue'
import History from '../pages/tables/history.vue'
import Design from '../pages/forms/design.vue'
import Design2 from '../pages/forms/design2.vue'

const routes = [
  { path: '/receipts', name: 'receipts', component: InvoiceForm },
  { path: '/history', name: 'history', component: History },
  { path: '/design', name: 'design', component: Design },
  { path: '/design2', name: 'design2', component: Design2 },
  { path: '/', redirect: '/receipts' }
]

export default createRouter({
  history: createWebHistory(),
  routes
}) 