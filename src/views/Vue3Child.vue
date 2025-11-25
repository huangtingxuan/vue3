<template>
  <div>vue3写法子组件</div>
  <div>{{ local }}</div>
  <button @click="change">点击</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  local: String,
});
const emit = defineEmits(["updateChild"]);
const change = () => {
  emit("updateChild", "我是子组件回传的值");
};

const init = () => {
  console.log("fff", props.local);
};
init();
</script>
<style scoped></style>
