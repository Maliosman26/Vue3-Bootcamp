import { ref, computed, watch } from "vue"; //reactive effect
export default function () {
// !**********************************************************************************************************
  const counter = ref(0);
  const oddOrEven = computed(() => (counter.value % 2 === 0 ? "Çift" : "Tek"));

  watch([counter, oddOrEven], ([newCounter, newOddOrEven], [oldCounter, oldOddOrEven]) => {
    console.log(oldOddOrEven, "=>", newOddOrEven); // Sadece tek-çift bilgisini almak istersek destructive function yapısı kullanabiliriz
  });
  // !**********************************************************************************************************

  return {
    counter,
    oddOrEven,
  };
}
