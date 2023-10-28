<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dicta dignissimos facilis porro quia quos sunt. Ab dolorem soluta tempora temporibus. Cum earum ex natus quos saepe sed ut.</p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />

  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Şu an yazıyor...</p>
</template>

<script>
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Search from "./composables/Search.js";
import Toggle from "./composables/Toggle.js";
export default {
  // data() {
  //   return {
  //     title: "Merhaba",
  //   };
  // },
  // beforeCreate() {
  //   console.log("BC");
  // },
  // created() {
  //   console.log("C");
  // },
  setup() {
    const { counter, oddOrEven } = Counter();
    const { title, titleLengthMessage } = Header();
    const { show, toggleIt } = Toggle();
    const { searchText, isTyping } = Search();

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>
