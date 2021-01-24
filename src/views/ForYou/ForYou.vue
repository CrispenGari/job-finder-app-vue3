<template>
  <div class="foryou">
    <h1>
      <span>Jobs For You</span>
      <span>
        <span @click="gotoHome">HOME</span><span @click="gotoLocal">LOCAL</span>
      </span>
    </h1>
    <Results :maxHieght="true" />
  </div>
</template>

<script>
import { Results } from "../../components";
export default {
  name: "ForYou",
  components: {
    Results,
  },
  mounted() {
    const endpoint = `description=all`;
    const cors = "https://cors-anywhere.herokuapp.com/";
    const baseUrl = "https://jobs.github.com/positions.json?";
    fetch(cors + baseUrl + endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.$store.commit("setSearchResults", data);
      });
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    gotoLocal() {
      this.$router.push("/local");
    },
  },
};
</script>

<style>
.foryou {
  width: 100%;
  padding: 10px;
  flex-direction: column;
  display: flex;
}
.foryou > h1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  user-zoom: none;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 500;
}
.foryou > h1 > span:last-child > span {
  margin: 0 5px;
  color: white;
  background: black;
  padding: 5px 10px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
}
.foryou > h1 > span:last-child > span:hover {
  background: lightseagreen;
}
</style>
