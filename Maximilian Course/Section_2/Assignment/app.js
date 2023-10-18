const app = Vue.createApp({
  data() {
    return {
      name: "Mostafa Esmail",
      age: 24,
      imgUrl:
        "https://media.istockphoto.com/id/1174818077/photo/mosque-and-pyramids.jpg?s=612x612&w=0&k=20&c=kewLXiirLBe_QOeAQ2MPNFk8S4oxcTFt0AMPQ4mAXKY=",
      inputvalue: "I am not empty",
    };
  },
  methods: {
    getFavoriteRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
