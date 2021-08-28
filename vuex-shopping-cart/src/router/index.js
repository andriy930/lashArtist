import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import Home from '../components/home/index.vue';

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
  {
    path: '/aboutme',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
