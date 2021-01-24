<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <div class="header__right">
      <router-link to="/local">Local</router-link>
      <router-link to="/foryou">For You</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100%;
  position: relative;
  top: 0;
  background: var(--header-color);
  user-select: none;
  user-zoom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 10;
  border-bottom: 1px solid #000000;
  color: white;
}
.header > a,
.header__right > a {
  text-decoration: none;
  color: white !important;
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 5px;
  transition: tranform 100ms linear ease-in-out;
}
.header > a:hover,
.header__right > a:hover {
  transform: scale(1.09);
  text-decoration: none;
  color: white;
}
.header > a:visited,
.header__right > a:visited {
  text-decoration: none;
  color: white;
}
</style>
