<template>
  <!--  <ModalSection :onSave="onSave" :title="'Modal Title'" :content="content" />-->
  <ModalSection :onSave="onSave">
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>

    <template v-slot:content> <!--Alttakiyle aynı-->
      <p class="text-green">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        asperiores commodi delectus dicta doloribus et eum explicabo fuga ipsa
        iusto molestiae natus, pariatur quae quia reprehenderit totam, velit.
        Aliquid, qui.
      </p>
    </template>
    <!--    <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        asperiores commodi delectus dicta doloribus et eum explicabo fuga ipsa
        iusto molestiae natus, pariatur quae quia reprehenderit totam, velit.
        Aliquid, qui.
      </p>
    </template>-->

    <template #default> Bu default olarak gösterilecek.. </template>
  </ModalSection>
</template>

<script>
import ModalSection from "@/components/ModalSection.vue";
export default {
  components: { ModalSection },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>
