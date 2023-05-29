<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Presents", "Lates", "Absents"],
  datasets: [
    {
      backgroundColor: ["#247881", "#43919B", "#30AADD"],
      data: [140, 60, 20],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped></style>
