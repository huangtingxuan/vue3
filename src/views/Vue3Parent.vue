<template>
  <div>vue3父组件</div>
  <div>子组件传回来的值：{{ chidValue }}</div>

  <div>store里的值：{{ store.state.num }}</div>
  <button @click="addAysn">异步调用</button>
  <Vue3ChildVue :local="local" @updateChild="upChild"></Vue3ChildVue>
</template>

<script setup>
import { ref } from "vue";
import Vue3ChildVue from "./Vue3Child.vue";
import { useStore } from "vuex";
const store = useStore();
const local = ref("嗨喽");
const chidValue = ref("");
const upChild = (value) => {
  store.commit("addNum", 1);
  chidValue.value = value;
};
const addAysn = () => {
  store.dispatch("asynAdd", 3);
};
</script>
<style scoped></style>
