import { createRouter, createWebHistory } from "vue-router";
import YaoBaby from "@/views/YaoBaby.vue";
import MyLove from "@/views/MyLove.vue";
import Parent from "@/views/ParentC.vue";
import Vue3Parent from "@/views/Vue3Parent";

const routes = [
  { path: "/", name: "YaoBaby", component: YaoBaby },
  { path: "/MyLove", name: "MyLove", component: MyLove },
  { path: "/Parent", name: "Parent", component: Parent },
  { path: "/vue3Parent", name: "Vue3Parent", component: Vue3Parent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
