<template>
  <form class="form" @submit.prevent="findJob">
    <input
      v-model="title"
      type="text"
      placeholder="Search by Title e.g JavaScript"
    />
    <input
      v-model="city"
      type="text"
      placeholder="Seach by City/Country e.g USA"
    />
    <label class="form__label">
      <input type="checkbox" :checked="fullTime" v-model="fullTime" />
      Full Time Only
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "",
      city: "",
      fullTime: true,
    };
  },
  methods: {
    findJob() {
      this.$store.commit("setSearchResults", []);
      const endpoint = `description=${this.title}&full_time=${this.fullTime}&location=${this.city}`;
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
  },
};
</script>

<style scoped>
form.form {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin: 10px auto;
  border: 1px solid lightgray;
}
.form > input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  background: var(--body-color);
  border-radius: 15px 0px 15px 0px;
  margin: 10px 0;
  font-size: 17px;
  caret-color: lightseagreen;
}
.form > input:last-child {
  border-radius: 0px 15px 0px 15px;
}
.form > input:focus {
  border-radius: 0px 15px 0px 15px;
}
.form > input:last-child:focus {
  border-radius: 15px 0px 15px 0px;
}
.form > label {
  width: fit-content;
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: gray;
}
.form > label > input {
  margin-right: 10px;
}
.form > button {
  display: none;
}
</style>
