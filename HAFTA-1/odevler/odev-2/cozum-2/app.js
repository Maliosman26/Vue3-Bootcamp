const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    uyari() {
      alert("Bu uyari mesaji ");
    },
    valueUpdated(e) {
      console.log(e.target.value);
      this.value = e.target.value;
    },
  },
}).mount("#exercise");
