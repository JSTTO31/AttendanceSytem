<template>
  <div>
    <div class="pt-5 px-10 bg-white">
      <div class="w-66">
        <h1 class="mx-4 text-h2">School Tracker</h1>
        <h3 class="mx-4 text-grey-darken-3">
          The school tracker system ensures accurate attendance monitoring for efficient
          management.
        </h3>
      </div>
      <v-container>
        <v-row>
          <v-col cols="9">
            <v-card flat class="mt-2 border pa-5" height="280">
              <LineChart :data="track_data" :options="track_options"></LineChart>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card flat class="mt-2 border pa-5" height="280">
              <DoughnutChart
                :data="remaining_data"
                :options="remaining_options"
              ></DoughnutChart>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-tabs class="mx-3" color="#247881">
        <v-tab class="text-capitalize">Today</v-tab>
        <v-tab class="text-capitalize">Enetered</v-tab>
        <v-tab class="text-capitalize">Leaved</v-tab>
        <v-tab class="text-capitalize">History</v-tab>
      </v-tabs>
    </div>
    <div class="px-10">
      <v-container fluid>
        <v-list class="bg-transparent">
          <v-card
            class="d-flex pa-3 mb-2 border rounded-0 text-white"
            color="#247881"
            flat
          >
            <v-row>
              <v-col cols="4" class="d-flex">
                <h5 class="text-center w-100">Student</h5>
              </v-col>
              <v-col cols="2" class="d-flex">
                <h5 class="text-center w-100">Date</h5>
              </v-col>
              <v-col cols="2" class="d-flex">
                <h5 class="text-center w-100">Clock in</h5>
              </v-col>
              <v-col cols="2" class="d-flex">
                <h5 class="text-center w-100">Clock out</h5>
              </v-col>
              <v-col cols="2" class="d-flex">
                <h5 class="text-center w-100">Status</h5>
              </v-col>
            </v-row>
          </v-card>
          <v-card
            @click=""
            v-for="student in students"
            class="d-flex pa-3 rounded-0"
            flat
          >
            <v-row>
              <v-col cols="4" class="d-flex">
                <v-icon size="55">mdi-account-circle</v-icon>

                <div class="d-flex align-start ml-2 flex-column justify-center">
                  <h4 class="text-blue-grey-darken-3">{{ student.name }}</h4>
                  <h6 class="text-grey-darken-2">{{ student.email }}</h6>
                </div>
              </v-col>
              <v-col
                class="d-flex font-weight-bold text-grey-darken-4 align-center justify-center"
                cols="2"
              >
                {{ new Date().toDateString() }}
              </v-col>
              <v-col
                class="d-flex font-weight-bold text-grey-darken-4 align-center justify-center"
                cols="2"
              >
                {{ new Date().toLocaleTimeString() }}
              </v-col>
              <v-col
                class="d-flex font-weight-bold text-grey-darken-4 align-center justify-center"
                cols="2"
              >
                ---
              </v-col>
              <v-col class="d-flex font-weight-bold align-center justify-center" cols="2">
                <v-chip color="success">Entered</v-chip>
              </v-col>
            </v-row>
          </v-card>
        </v-list>
        <div class="w-100 d-flex">
          <v-spacer></v-spacer>
          <VPagination length="5"></VPagination>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  data as track_data,
  options as track_options,
} from "../CharConfig/SchoolTrackConfig";
import {
  data as remaining_data,
  options as remaining_options,
} from "../CharConfig/StudentRemainingConfig";
const $student = useStudentStore();
const { students } = storeToRefs($student);

$student.getAll();
</script>

<style scoped></style>
