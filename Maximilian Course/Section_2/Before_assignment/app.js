const app = Vue.createApp({
  data() {
    return {
      courseFirstGoal: "Finish the Course and Learn Vue!",
      courseSecondGoal: "<h3>Master Vue and Build Amazing Apps!</h3>",
      vueLink: "https://vuejs.org/",
      avilable: false,
    
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseFirstGoal;
      } else {
        return this.courseSecondGoal;
      }
    },
  },
});

app.mount("#user-goal");
