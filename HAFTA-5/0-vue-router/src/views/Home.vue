<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Home</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
    consequatur delectus dicta dignissimos est hic id, ipsa magni maxime neque
    numquam, perspiciatis placeat quasi quod sint sunt totam ullam voluptatum?
  </p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      // alert(e.target.value);
      // this.$router.push(`/detay/${e.target.value}`);
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "maliosman26"
        }
      });
    },
  },
};
</script>
