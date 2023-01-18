<template>
  <div class="calendar">
    <div class="calendar-header">
      <div class="weekday red">S</div>
      <div class="weekday">M</div>
      <div class="weekday">T</div>
      <div class="weekday">W</div>
      <div class="weekday">T</div>
      <div class="weekday">F</div>
      <div class="weekday">S</div>
    </div>
    <div class="calendar-body">
      <div
        class="day"
        v-for="day in days"
        :class="{
          red: day === 1 || day === 8 || day === 15 || day === 22 || day === 29,
        }"
        :key="day">
        {{ day }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "./index.css";

const validarDomingo = () => {
  if (day == 1 || day == 8 || day == 15 || day == 22 || day == 29) return true;
  return false;
};

const days = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
]);
</script>
