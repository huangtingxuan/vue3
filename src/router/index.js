import { createRouter, createWebHistory } from "vue-router";
import YaoBaby from '@/views/YaoBaby.vue'
import MyLove from '@/views/MyLove.vue'

const routes = [
    {path:'/', name:'YaoBaby', component: YaoBaby},
    {path:'/MyLove', name:'MyLove', component: MyLove}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router