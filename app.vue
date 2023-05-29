<template>
  <VApp>
    <VNavigationDrawer width="300" v-if="!$route.name?.toString().includes('print-page')">
      <div class="d-flex flex-column h-100">
        <div class="d-flex align-center justify-center py-10 flex-column">
          <v-avatar class="rounded-0 mb-2" size="45">
            <v-img src="/images/calendar.png"></v-img>
          </v-avatar>
          <h1 class="text-h4 text-blue-grey-darken-4 font-weight-bold">eAttendance</h1>
        </div>
        <v-list class="px-5">
          <v-list-item
            color="#247881"
            @click=""
            class="rounded-xl font-weight-medium my-2 py-2"
            :to="{ name: 'index' }"
          >
            <v-icon class="mr-5">mdi-view-dashboard-outline</v-icon>
            Dashboard
          </v-list-item>
          <v-list-item
            color="#247881"
            :to="{ name: 'tracker' }"
            class="rounded-xl font-weight-medium my-2 py-2"
          >
            <v-icon class="mr-5">mdi-chart-gantt</v-icon>
            Real-time tracker
          </v-list-item>
          <v-list-item
            color="#247881"
            :to="{ name: 'attendance-management' }"
            class="rounded-xl font-weight-medium my-2 py-2"
          >
            <v-icon class="mr-5">mdi-account-multiple-outline</v-icon>
            Management
          </v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <div class="d-flex px-5 mt-2 mb-5">
          <v-avatar class="rounded-0" size="50">
            <v-icon size="50" color="grey-darken-3">mdi-account-circle</v-icon>
          </v-avatar>
          <div
            class="d-flex align-start text-grey-darken-3 flex-column ml-2 justify-center"
          >
            <h4>Joshua Sotto</h4>
            <h6>Administrator</h6>
          </div>
        </div>
      </div>
    </VNavigationDrawer>
    <VAppBar
      class="border-b px-10"
      color="#247881"
      flat
      v-if="!$route.name?.toString().includes('print-page')"
    >
      <v-text-field
        variant="outlined"
        hide-details
        single-line
        class="mx-5 bg-white rounded-lg"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Search..."
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        class="mx-2 text-capitalize"
        color="white"
        @click="showCreateStudentDialog = true"
        prepend-icon="mdi-plus"
        variant="text"
        >New student</v-btn
      >
      <v-btn class="mx-2" color="white" icon="mdi-bell" variant="text"></v-btn>
      <!-- <v-tabs color="#EDF1D6" class="ml-5">
        <v-tab class="text-capitalize font-weight-bold" :to="{ name: 'index' }"
          >Overview</v-tab
        >
        <v-tab
          class="text-capitalize font-weight-bold"
          :to="{ name: 'attendance-management' }"
          >Attendance Management</v-tab
        >
        <v-tab class="text-capitalize font-weight-bold">Reports</v-tab>
      </v-tabs> -->
      <!-- <v-avatar class="bg-white">
        <v-img
          src="images/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        ></v-img>
      </v-avatar> -->
    </VAppBar>
    <!-- <VNavigationDrawer width="400" location="right"> </VNavigationDrawer> -->
    <v-main class="bg-grey-lighten-5">
      <NuxtPage></NuxtPage>
      <StudentCreateDialog
        v-model:show-dialog="showCreateStudentDialog"
      ></StudentCreateDialog>
    </v-main>
  </VApp>
</template>
<script setup lang="ts">
const showCreateStudentDialog = ref(false);
</script>
