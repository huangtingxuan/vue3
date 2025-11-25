<template>
  <div>{{ msg }}</div>
  <button @click="setMsgToP">按钮</button>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      one: "顶顶顶顶顶顶顶",
    };
  },
  methods: {
    setMsgToP() {
      this.$emit("setParent", "我是子组件穿古");
    },
  },
};
</script>
<style scoped></style>
