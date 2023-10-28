import { ref } from "vue"; //reactive effect
export default function () {
  const show = ref(true);

  //function toggleIt() {}
  const toggleIt = () => {
    show.value = !show.value;
  };

  return {
    show,
    toggleIt,
  };
}
