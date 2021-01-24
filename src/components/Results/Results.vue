<template>
  <div class="results">
    <small v-if="results?.length">{{ results?.length }} Jobs Found</small>
    <div
      :class="`${maxHieght ? 'results--max' : 'results__container'}`"
      v-if="results?.length"
    >
      <JobCard v-for="job in results" :key="job.id" :data="job" />
    </div>
    <div class="results__notfound" v-else>
      <h1><span>4</span><span>0</span><span>4</span></h1>
      <p>No Jobs Found</p>
      <small>Try a key word Search</small>
    </div>
  </div>
</template>

<script>
import { JobCard } from "../../components";
export default {
  name: "Results",
  components: {
    JobCard,
  },
  props: {
    maxHieght: Boolean,
  },
  data() {
    return {
      state: this.$store.state,
    };
  },
  computed: {
    results() {
      return this.state.searchResults;
    },
  },
};
</script>

<style scoped>
.results {
  width: 100%;
  margin: 10px auto;
  background: white;
  border: 1px solid lightgray;
  max-width: 1000px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.results > h1 {
  text-align: center;
  width: 100%;
  margin: 10px;
}
.results__container {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  max-height: 45vh;
}
.results--max {
  max-height: 76vh !important;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
}
.results > small {
  color: gray;
  width: fit-content;
  margin: 5px auto;
  font-size: 15px;
  font-weight: 500px;
}
.results__notfound {
  height: 30vh;
  overflow-y: hidden;
  display: grid;
  place-items: center;
  user-select: none;
  user-zoom: none;
}
.results__notfound > small {
  color: gray;
}
.results__notfound > h1 {
  font-size: 90px;
}
.results__notfound > h1::first-letter {
  color: green;
}
.results__notfound > h1 > span:nth-child(2) {
  color: red;
}
.results__notfound > h1 > span:nth-child(3) {
  color: lightseagreen;
}
</style>
