import CardCollectionVue from '@/components/CardCollection.vue'
import Landing from '@/components/Landing.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:Landing
  },
  {path:"/collection",name:"collection", component:CardCollectionVue}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
