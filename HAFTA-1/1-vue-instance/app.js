const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1. gün",
      content: "Lorem ipsum dolor sit amet..",
      eduflow: {
        title: "Müfredat ve açıklamalar için tıklayınız",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "mufredat-kablosuzkedi-vue-bootcamp",
      },
      owner: "Deneme",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    /*Fonksiyonlarımızı içeren arkadaş*/
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(message, event) {
      // console.log(message, event.x, event.y);
      this.changeTitle(`${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount(
  "#app",
); /* id'si app olan bölümü kontrol et işlem uygula vs. Hangi bölüm üzerinde vue uygulaması çalışdığını belirtiyoruz*/

// Vue2 Version
// new Vue ({
//     data : {
//
//     }
// })
