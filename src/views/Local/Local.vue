<template>
  <div class="local">
    <h1>
      <span>Local Jobs</span><span>{{ location }}</span>
    </h1>
    <Results :maxHieght="true" />
  </div>
</template>

<script>
import { Results } from "../../components";
export default {
  name: "Local",
  components: {
    Results,
  },
  data() {
    return {
      location: "",
    };
  },
  mounted() {
    fetch(
      "https://ipfind.co/?ip=196.21.104.1&auth=7b98da30-ff64-4429-ae6a-10d87d82ed4e"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.location = `${data?.country}, ${data.country_code}`;
        if (data.country_code) {
          const endpoint = `description=all&location=${data.country_code}`;
          const cors = "https://cors-anywhere.herokuapp.com/";
          const baseUrl = "https://jobs.github.com/positions.json?";
          fetch(cors + baseUrl + endpoint)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              this.$store.commit("setSearchResults", data);
            });
        }
      });
  },
};
</script>

<style scoped>
.local {
  width: 100%;
  padding: 10px;
  flex-direction: column;
  display: flex;
}
.local > h1 {
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
</style>
