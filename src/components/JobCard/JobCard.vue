<template>
  <div class="jobcard" @click="openSite">
    <div class="jobcard__company">
      <img :src="companyLogo" alt="companyLogo" />
      <h1>{{ companyName }}</h1>
    </div>
    <div class="jobcard__main">
      <h2>{{ location }}</h2>
      <button @click="apply">
        Apply
      </button>
    </div>
    <div class="jobcard__badges">
      <span>{{ jobType }}</span>
      <span>{{ jobTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    data: Object,
  },
  methods: {
    apply() {
      document.location.href = this.howToApply;
    },
    openSite() {
      document.location.href = this.companyUrl;
    },
  },
  computed: {
    companyLogo() {
      return this?.data?.company_logo;
    },
    companyName() {
      return this?.data?.company;
    },
    jobType() {
      return this?.data?.type;
    },
    location() {
      return this?.data?.location;
    },
    howToApply() {
      return `${String(this?.data?.how_to_apply).split('"')[1]}`;
    },
    jobTitle() {
      return this?.data?.title;
    },
    companyUrl() {
      return this?.data?.company_url;
    },
  },
};
</script>

<style scopped>
.jobcard {
  width: 33%;
  min-width: 400px;
  margin: auto;
  background: var(--body-color);
  cursor: pointer;
  margin: 10px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  user-select: none;
  user-zoom: none;
}
.jobcard:hover {
  animation: hover-animation 1s linear;
  background: black;
  color: white;
}
.jobcard__company {
  display: flex;
}
.jobcard__company > img {
  width: 100px;
  object-fit: contain;
  margin-right: 5px;
}
.jobcard__company > h1 {
  font-weight: 500;
  letter-spacing: 2px;
}
.jobcard__badges {
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
}
.jobcard__badges > span {
  width: fit-content;
  color: white;
  background: lightseagreen;
  padding: 5px 10px;
  height: fit-content;
  font-size: 12px;
  border-radius: 999px;
  font-weight: 700;
  margin: 5px 5px 5px 0;
}
.jobcard__badges > span:first-child {
  background: green;
}
.jobcard__main {
  padding: 10px;
  height: 100%;
  max-height: 100px;
  background: white;
  display: grid;
  place-items: center;
}
.jobcard__main > button {
  outline: none;
  color: white;
  background: green;
  width: 100px;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
@keyframes hover-animation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
