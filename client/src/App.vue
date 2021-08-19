<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/common/Header";
export default {
  components: { Header },
  methods: {
    getStudents() {
      this.$store.dispatch("getStudents");
    },
  },
  created() {
    this.getStudents();
  },
};
</script>

<style lang="scss">
</style>
