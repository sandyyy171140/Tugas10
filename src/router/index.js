import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/about.vue'
import Contact from '../views/Contact.vue'
import ProductDetail from '../Views/ProductDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router