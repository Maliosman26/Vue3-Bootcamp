<template>
  <section>
    {{ $store.state.mainName }}
  </section>
  <section>
    {{ $store.state.musteri.contactName }}
  </section>
  <pre>
    {{ musteriADI }}
  </pre>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  created() {
    console.log(this.$store.getters["musteri/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "musteri/_contactName",
    }),
  },
};
</script>
