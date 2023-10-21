<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <slot />
</template>

<script>
export default {
  mounted() {
    console.log("GREEN mounted");
  },
};
</script>
