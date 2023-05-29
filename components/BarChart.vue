<template>
  <Bar :data="data" :options="options" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Present", "Absent", "Late"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#247881",
      data: [40, 20, 12],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    yAxis: {
      grid: {
        display: false,
      },
    },
  },
};
</script>
