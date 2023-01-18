<template>
  <div class="main-container">
    <SideMenu />
    <FormIngressante v-if="isFormOpen" />
    <main>
      <header class="main-header">
        <label>Controle geral</label>
        <i class="tools"></i>
      </header>
      <div class="dashboard">
        <div class="top">
          <div className="box shadow" />
          <div className="box shadow" />
          <div className="box shadow" />
          <Counter />
        </div>
        <div class="bottom">
          <div class="left">
            <div class="bar-chart shadow">
              <label class="barchart-text">Inscritos</label>
              <BarChart />
            </div>
            <div class="bar-chart line shadow">
              <div class="line-container">
                <LineChart />
              </div>
              <Calendario />
            </div>
          </div>
          <div class="right shadow">
            <div class="pie-container">
              <PieChart />
              <div class="perc-pie-chart">45%</div>
            </div>
            <div class="description">
              <label>Curso A</label>
              <label>Curso B</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import SideMenu from "../../components/SideMenu/SideMenu.vue";
import BarChart from "../../components/BarChart/BarChart.vue";
import LineChart from "../../components/LineChart/LineChart.vue";
import Calendario from "../../components/Calendario/Calendario.vue";
import FormIngressante from "../../components/FormIngressante/FormIngressante.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Counter from "../../components/Counter/Counter.vue";
import "./index.css";
import PieChart from "../../components/PieChart/PieChart.vue";

const store = useStore();
const isFormOpen = ref(store.state.isFormOpen);

watch(
  () => store.state.isFormOpen,
  (newValue) => {
    isFormOpen.value = newValue;
  },
  { deep: true }
);
</script>
