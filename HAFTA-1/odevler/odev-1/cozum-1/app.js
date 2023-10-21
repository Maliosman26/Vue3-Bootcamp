const app = Vue.createApp({
  data() {
    return {
      name: "Muhammet Ali Osman ÖZYURT",
      age: 26,
      imageUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKY9GCowiVNTLRHTUVQUUxYzxbFu0RL76y_cCZyo=s176-c-k-c0x00ffffff-no-rj",
    };
  },
  methods: {
    getRandom() {
      return Math.random();
    },
  },
}).mount("#exercise");
