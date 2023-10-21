const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    //          computed:
    // Fonksiyon gibi çalışan değişkenlerdir.
    // Değerini okuyabiliriz. Set edemeyiz(şimdilik).
    // Değişken gibi davranır.
    // Geriye bir değer return etmesi döndürmesi gerekir!!!
    // Method gibi tanımlanan yapılardır.
    // Örneğin aşağıdaki kodda counter'da bir değişiklik varsa tetiklen yoksa tetiklenme mantığıyla çalışır. Fakat methods'da her zaman tetiklenir template kısmı render edilir her defasında.

    getCounterResult() {
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch: {
    // Data'da computed'da bulunan bir bilgiyi direk izleyebilmemizi sağlar.
    // Değer değiştiğinde çalışır.
    // Geriye bir değer return etmesi döndürmesi gerekmez!!!
    counter(newValue, oldValue) {
      console.log("Counter", oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log("RESULT", oldValue, "=>", newValue);
    },
  },
  // methods: {
  //   inc() {
  //       this.counter++;
  //   },
  //   dec() {
  //       this.counter--;
  //   } ,
  // },
});
app.mount("#app");
