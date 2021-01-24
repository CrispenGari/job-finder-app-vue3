<template>
  <div class="home">
    <Form />
    <Results />
  </div>
</template>

<script>
import { Form, Results } from "../../components";
export default {
  name: "Home",
  components: {
    Form,
    Results,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  padding: 10px;
  flex-direction: column;
  display: flex;
}
</style>
