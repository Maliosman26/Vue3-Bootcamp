// noinspection JSUnusedGlobalSymbols

const app = Vue.createApp({
  data() {
    return {
      fullName: "Deneme",
    };
  },
  methods: {
    updateValue(event) {
      console.log(event.target.value);
      this.fullName = event.target.value;
    },
  },
}).mount(
  "#app",
); /* id'si app olan bölümü kontrol et işlem uygula vs. Hangi bölüm üzerinde vue uygulaması çalışdığını belirtiyoruz*/
