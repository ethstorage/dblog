import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:address',
    name: 'BlogPostList',
    component: Blog
  },
  {
    path: '/blog/:address/:id',
    name: 'BlogPost',
    component: Blog
  }
]

const router = new VueRouter({
  base: '/home.w3q/',
  routes
})

export default router
