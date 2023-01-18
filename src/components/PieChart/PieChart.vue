<template>
  <Pie :data="chartConfig.data" :options="chartConfig.options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import * as chartConfig from "./chartConfig.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip);
</script>
