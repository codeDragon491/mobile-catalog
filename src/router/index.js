import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/mobiles/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/detail/:id/:name/:memory',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/mobiles/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
