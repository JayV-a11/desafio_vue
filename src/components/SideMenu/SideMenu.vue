<template>
  <div class="side-menu">
    <div class="photo"><i class="i-photo"></i></div>

    <div class="info">
      <label>Silva Junior</label>
      <label>silva.junior@empresa.com</label>
    </div>

    <div class="options">
      <button><i class="home"></i> Home</button>
      <button class="button" :class="{ open: isFormOpen }" @click="toggle">
        <i class="ingressantes"></i> Ingressantes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import "./index.css";

const store = useStore();
const isFormOpen = ref(store.state.isFormOpen);

watch(
  () => store.state.isFormOpen,
  (newValue) => {
    isFormOpen.value = newValue;
  },
  { deep: true }
);

const toggle = () => {
  store.dispatch("setFormOpen", true);
};
</script>
