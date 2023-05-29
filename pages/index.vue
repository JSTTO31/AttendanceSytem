<template>
  <div class="pa-5 px-10">
    <div class="w-66">
      <h1 class="mx-4 text-h2">Dashboard</h1>
      <h3 class="mx-4 text-grey-darken-3">
        The dashboard provides valuable data insights for informed decision-making.
      </h3>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="d-flex border pa-5 rounded-lg" flat>
            <v-avatar class="bg-blue-grey-darken-4" size="65">
              <v-icon size="50" color="white">mdi-school-outline</v-icon>
            </v-avatar>
            <div class="d-flex flex-column ml-5">
              <h4 class="text-grey-darken-1">Students</h4>
              <h1>100</h1>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="d-flex border pa-5 rounded-lg" flat>
            <v-avatar class="bg-blue-grey-darken-4" size="65">
              <v-icon size="50" color="white">mdi-account-check-outline</v-icon>
            </v-avatar>
            <div class="d-flex flex-column ml-5">
              <h4 class="text-grey-darken-1">Present</h4>
              <h1>100</h1>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="d-flex border pa-5 rounded-lg" flat>
            <v-avatar class="bg-blue-grey-darken-4" size="65">
              <v-icon size="50" color="white">mdi-account</v-icon>
            </v-avatar>
            <div class="d-flex flex-column ml-5">
              <h4 class="text-grey-darken-1">Absents</h4>
              <h1>40</h1>
            </div>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="d-flex border pa-5 rounded-lg" flat>
            <v-avatar class="bg-blue-grey-darken-4" size="65">
              <v-icon size="50" color="white">mdi-account</v-icon>
            </v-avatar>
            <div class="d-flex flex-column ml-5">
              <h4 class="text-grey-darken-1">Late</h4>
              <h1>50</h1>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-card height="600" class="pa-5">
            <div class="py-2 d-flex align-center">
              <h3 class="px-0 d-flex align-center font-weight-bold">
                Monthly attendance
              </h3>
              <v-spacer></v-spacer>
              <v-tabs>
                <v-tab class="font-weight-bold text-capitalize">Present</v-tab>
                <v-tab class="font-weight-bold text-capitalize">Late</v-tab>
                <v-tab class="font-weight-bold text-capitalize">Absent</v-tab>
              </v-tabs>
              <div class="ml-10" style="width: 120px">
                <v-select
                  density="compact"
                  :model-value="'Today'"
                  label="Today"
                  hide-details
                  single-line
                  variant="outlined"
                ></v-select>
              </div>
            </div>
            <v-divider></v-divider>
            <v-card flat class="h-75 mt-10">
              <LineChart :data="data" :options="options"></LineChart>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-5 pb-5 mb-3" height="290">
            <DoughnutChart></DoughnutChart>
          </v-card>
          <v-card class="pa-5" height="300">
            <h3 class="px-0 d-flex align-center font-weight-bold">Recently Activity</h3>

            <v-list>
              <v-list-item
                v-for="student in students.slice(7)"
                :title="student.name"
                :key="student.id"
                @click=""
                class="pa-2 rounded-lg my-1"
                :subtitle="student.email"
              >
                <template #prepend>
                  <v-icon size="45">mdi-account-circle</v-icon>
                </template>
                <template #append>
                  <v-chip color="success" class="ml-15">Present</v-chip>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-col>
        <v-container fluid class="pl-0">
          <v-card class="d-flex py-2 rounded-lg">
            <v-col>
              <v-card
                class="d-flex justify-center flex-column align-center rounded-lg"
                flat
              >
                <h4 class="text-grey-darken-1">Present</h4>
                <h1>100</h1>
              </v-card>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <v-card
                class="d-flex justify-center flex-column align-center rounded-lg"
                flat
              >
                <h4 class="text-grey-darken-1">Absents</h4>
                <h1>40</h1>
              </v-card>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col>
              <v-card
                class="d-flex justify-center flex-column align-center rounded-lg"
                flat
              >
                <h4 class="text-grey-darken-1">Late</h4>
                <h1>50</h1>
              </v-card>
            </v-col>
          </v-card>
        </v-container>
        <v-container fluid class="pl-0">
          <div class="d-flex align-center justify-center" style="height: 600px"></div>
        </v-container>
      </v-col> -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
const { students } = storeToRefs(useStudentStore());
useHead({
  title: "eAttendance|Dashboard",
});
const month = computed(() => useMonth(new Date().getMonth() - 1));
const day = computed(() => useDay(new Date().getDay()));
const $student = useStudentStore();
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#40513B",
      data: [40, 39, 10, 40, 39, 80, 40],
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
  },
};

$student.getAll();
</script>

<style scoped></style>
