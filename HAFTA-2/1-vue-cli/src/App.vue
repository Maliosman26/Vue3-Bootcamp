<template>
  <app-header></app-header>
  <div class="container">
    <h3>Benim ilk Vue CLI Uygulamam</h3>
    <p>Bugün component ve Vue CLI konulaını görüyoruz</p>
  </div>
  <!--  <CounterItem></CounterItem>-->
  <!-- <benim-guzel-sayacim></benim-guzel-sayacim>-->
  <counter-item/> <!-- Her iki kullanım da uygundur. Self Closing kullanımını Vue CLI arkada otomatik olarak isim çevirimi yapar-->
  <counterItem/>

</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
import AppHeader from "@/components/appHeader.vue";
export default {
  components: {
    AppHeader,
    CounterItem,
    // "benim-guzel-sayacim": CounterItem,

  },
};
</script>
