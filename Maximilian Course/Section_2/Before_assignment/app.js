const app = Vue.createApp({
  data() {
    return {
      courseFirstGoal: "Finish the Course and Learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
