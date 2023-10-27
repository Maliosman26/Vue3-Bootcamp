<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar />

    <app-bookmark-list />
  </div>
</template>

<script>
import Sidebar from "@/components/Home/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>
