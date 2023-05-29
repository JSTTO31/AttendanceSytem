<template>
  <v-hover v-slot="{ props, isHovering }">
    <v-card @click="showDialog" flat class="border" v-bind="props">
      <v-avatar size="125" class="rounded-lg" v-if="image">
        <v-img :lazy-src="image" :src="image"></v-img>
      </v-avatar>
      <v-icon size="125" class="rounded-lg" v-else color="grey-darken-3">
        mdi-account</v-icon
      >
      <v-overlay
        contained
        scrim="black"
        class="d-flex align-center justify-center"
        :model-value="isHovering"
      >
        <v-icon color="white" size="55">mdi-camera-retake-outline</v-icon>
      </v-overlay>
      <input type="file" @change="change" hidden accept=".png, .jpg" ref="file" />
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
const emits = defineEmits(["change-image"]);
const file = ref();
const props = defineProps(["image"]);
const showDialog = () => {
  file.value.click();
};

const change = (e: any) => {
  emits("change-image", e);
};
</script>

<style scoped></style>
