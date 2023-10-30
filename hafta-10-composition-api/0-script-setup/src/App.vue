<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <button @click="inc">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />

  <hr />

  <h1>User App</h1>
  <input type="text" v-model="state.personal.name" />
  <input type="text" v-model="state.personal.lname" />
  {{ state.personal }}
</template>

<script setup>
import { ref, reactive, watch } from "vue";
//! beforeCreater() created() ve data()
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils.js";
const { title, counter, inc, alertMe } = Utils();

//! UserApp
const state = reactive({
  personal: {
    name: "Ali Osman",
    lname: null,
  },
});

watch(
  () => JSON.parse(JSON.stringify(state.personal)),
  (newPersonal, oldPersonal) => {
    console.log(newPersonal);
    console.log(oldPersonal);
  },
);

console.log("state :>>", state.personal.name);
</script>
