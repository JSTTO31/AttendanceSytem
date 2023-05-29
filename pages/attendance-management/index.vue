<template>
  <div class="pt-5 px-15 bg-white">
    <div class="w-66">
      <h1 class="text-h2">Attendance</h1>
      <h3 class="text-grey-darken-3">
        The attendance page simplifies student attendance recording and tracking for
        efficient management.
      </h3>
    </div>
    <div class="w-100 d-flex align-end">
      <h3 class="text-grey-darken-3">Student List</h3>
      <v-spacer></v-spacer>
      <v-tabs color="#40513B">
        <v-tab class="text-capitalize">Today</v-tab>
        <v-tab class="text-capitalize">Present</v-tab>
        <v-tab class="text-capitalize">Absent</v-tab>
        <v-tab class="text-capitalize">Late</v-tab>
        <v-tab class="text-capitalize">All Students</v-tab>
      </v-tabs>
    </div>
  </div>
  <div class="pt-5 px-15">
    <v-card class="d-flex pa-3 mb-2 border rounded-0 text-white" color="#247881" flat>
      <v-row>
        <v-col cols="2" class="d-flex">
          <h5 class="text-center w-100">Student</h5>
        </v-col>
        <v-col cols="2" class="d-flex">
          <h5 class="text-center w-100">ID</h5>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-center">
          <h5 class="text-center w-100">Gender</h5>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-center">
          <h5 class="text-center w-100" cols="2">Phone</h5>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-center">
          <h5 class="text-center w-100">Created at</h5>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-center">
          <h5 class="text-center w-100">Status</h5>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      :to="'/attendance-management/' + student.id"
      v-for="student in students"
      class="py-2 rounded-0"
      flat
    >
      <v-row>
        <v-col class="px-5 d-flex align-center" cols="2">
          <v-icon color="grey" size="55">mdi-account-circle</v-icon>
          <div class="ml-2">
            <h5>
              {{ student.name }}
            </h5>
            <h6 class="font-weight-regular">
              {{ student.email }}
            </h6>
          </div></v-col
        >
        <v-col class="text-center d-flex justify-center align-center">{{
          student.id
        }}</v-col>
        <v-col class="text-center d-flex justify-center align-center">{{
          student.gender
        }}</v-col>
        <v-col class="text-center d-flex justify-center align-center">{{
          student.phone_number
        }}</v-col>
        <v-col class="text-center d-flex justify-center align-center">{{
          new Date(student.created_at).toDateString()
        }}</v-col>
        <v-col class="text-center d-flex justify-center align-center">
          <v-chip color="success">Present</v-chip>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const { students } = storeToRefs(useStudentStore());
const $student = useStudentStore();
$student.getAll();
</script>

<style scoped></style>
