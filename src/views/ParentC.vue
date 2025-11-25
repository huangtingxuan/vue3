<template>
  <div>{{ childMsg }}</div>
  <div>{{ tow }}</div>
  <child msg="gggggg" @setParent="setValue" ref="chilsS"></child>
</template>

<script>
import child from "./ChildC.vue";
export default {
  components: {
    child,
  },
  data() {
    return {
      childMsg: "",
      tow: "",
    };
  },
  methods: {
    setValue(value) {
      console.log("ggggg", value);
      this.childMsg = value;
      this.tow = this.$refs.chilsS.one;
    },
  },
};
</script>
<style scoped></style>
