<template>
  <VueDatePicker
    style="transform: scale(1.85)"
    v-model="date"
    inline
    class="d-flex align-center justify-center"
    auto-apply
    mode-height="100"
  ></VueDatePicker>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>
