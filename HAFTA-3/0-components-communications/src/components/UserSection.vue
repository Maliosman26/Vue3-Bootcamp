<template>
  <ListSection />
  <AddSection />
</template>

<script>
import ListSection from "@/components/ListSection.vue";
import AddSection from "@/components/AddSection.vue";
export default {
  // props: ["userList"],
  // emits: ["new-item"],
  components: {
    ListSection,
    AddSection,
  },
};
</script>
