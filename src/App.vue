<template>
  <div class="app">
    <Header />
    <div class="app__main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Header } from "./components";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
