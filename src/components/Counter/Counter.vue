<template>
  <div class="counter shadow">
    <label class="total-inscritos">Total de Inscritos</label>
    <h3>{{ ingressantes }}</h3>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import "./index.css";

const store = useStore();

const ingressantes = ref(0);

watch(
  () => store.state.ingressantes,
  (newValue) => {
    ingressantes.value = newValue?.length;
  },
  { deep: true }
);
</script>
