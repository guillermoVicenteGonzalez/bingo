import CardCollectionVue from '@/components/CardCollection.vue'
import Landing from '@/components/Landing.vue'
import personalCardVue from '@/components/personalCard.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:Landing
  },
  {path:"/collection",name:"collection", component:CardCollectionVue},
  {path:"/card",name:"personalCard", component:personalCardVue}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
