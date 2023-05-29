<template>
  <div class="pt-5 px-15 h-100" v-if="student">
    <v-container fluid class="px-0 h-100">
      <v-row class="">
        <v-col cols="3" class="px-0">
          <v-btn
            variant="text"
            prepend-icon="mdi-arrow-left"
            flat
            @click="$router.push({ name: 'attendance-management' })"
            class="mb-2 font-weight-mediumw text-capitalize"
            >Back to management</v-btn
          >
          <v-card class="pa-5 d-flex flex-column align-center rounded-0 pt-10" id="print">
            <v-avatar size="150" class="bg-grey-lighten-4">
              <v-img :src="student.image"></v-img>
            </v-avatar>
            <div class="text-center mt-5">
              <h2>{{ student.name }}</h2>
              <h4>Student</h4>
            </div>
            <div class="w-100 mt-5 font-weight-regular text-grey-darken-2">
              <h5 class="d-flex justify-space-between font-weight-regular mb-2">
                <v-icon class="mr-5">mdi-mail</v-icon>
                {{ student.email }}
              </h5>
              <h5 class="d-flex justify-space-between font-weight-regular mb-2">
                <v-icon class="mr-5">mdi-phone</v-icon>
                {{ student.phone_number }}
              </h5>
              <h5 class="d-flex justify-space-between font-weight-regular mb-2">
                <v-icon class="mr-5">mdi-map-marker</v-icon>
                <span class="text-right"> {{ student.address }}</span>
              </h5>
            </div>
            <v-btn
              class="w-100"
              color="blue-darken-4"
              flat
              prepend-icon="mdi-printer"
              block
              @click="
                $router.push({
                  name: 'print-page-student_id',
                  params: { student_id: student.id },
                })
              "
              >Print ID</v-btn
            >

            <v-card-actions class="font-weight-medium text-capitalize w-100 px-0 pr-2">
              <v-btn
                variant="outlined"
                class="w-50"
                color="grey-darken-2"
                prepend-icon="mdi-cog"
                >Edit details</v-btn
              >
              <v-btn
                variant="outlined"
                class="w-50"
                color="error"
                prepend-icon="mdi-trash-can"
                >Delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="" class="h-100">
          <v-card class="rounded-0 h-100">
            <div class="d-flex justify-space-between" style="height: 65px">
              <v-btn
                flat
                variant="text"
                color="#247881"
                class="rounded-0 h-100"
                width="50"
                size="x-large"
                icon="mdi-chevron-left"
              ></v-btn>
              <h2 class="py-2 d-flex align-center" style="color: #247881">
                <v-icon class="mr-2">mdi-calendar</v-icon>
                {{ useMonth(new Date().getMonth()) + "  " + new Date().getFullYear() }}
              </h2>
              <v-btn
                flat
                class="rounded-0 h-100"
                variant="text"
                color="#247881"
                width="50"
                size="x-large"
                icon="mdi-chevron-right"
              ></v-btn>
            </div>
            <div class="d-flex">
              <v-col cols="3">
                <v-card
                  flat
                  class="d-flex pa-5 justify-space-between rounded-xl align-center"
                >
                  <v-icon size="45">mdi-clock-outline</v-icon>
                  <h2 class="mt-3 text-grey-darken-4">250Hr</h2>
                </v-card>
              </v-col>
              <v-divider vertical class="my-5"></v-divider>
              <v-col cols="3">
                <v-card
                  flat
                  class="d-flex pa-5 justify-space-between rounded-xl align-center"
                >
                  <VProgressCircular
                    :model-value="90"
                    color="success"
                    size="45"
                    width="6"
                  >
                  </VProgressCircular>
                  <h3 class="mt-3 text-grey-darken-4">Presents</h3>
                </v-card>
              </v-col>
              <v-divider vertical class="my-5"></v-divider>

              <v-col cols="3">
                <v-card
                  flat
                  class="w-100 d-flex pa-5 justify-space-between rounded-xl align-center w-100"
                >
                  <VProgressCircular
                    :model-value="90"
                    color="warning"
                    size="45"
                    width="6"
                  >
                  </VProgressCircular>
                  <h3 class="mt-3 text-grey-darken-4">Late</h3>
                </v-card>
              </v-col>
              <v-divider vertical class="my-5"></v-divider>

              <v-col cols="3">
                <v-card
                  flat
                  class="w-100 d-flex pa-5 justify-space-between rounded-xl align-center mx-1"
                >
                  <VProgressCircular :model-value="90" color="error" size="45" width="6">
                  </VProgressCircular>
                  <h3 class="mt-3 text-grey-darken-4">Absents</h3>
                </v-card>
              </v-col>
            </div>
            <div class="px-5">
              <v-card
                class="d-flex pa-2 mb-2 border rounded-0 text-grey-darken-3"
                color="grey-lighten-4"
                flat
              >
                <v-row>
                  <v-col cols="6" class="d-flex">
                    <h5 class="w-100 text-center">Date</h5>
                  </v-col>
                  <v-col cols="2" class="d-flex">
                    <h5 class="text-center w-100">Clock in</h5>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <h5 class="text-center w-100">Clock out</h5>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <h5 class="text-center w-100" cols="2">Time</h5>
                  </v-col>
                </v-row>
              </v-card>
              <v-card
                v-for="student in students.slice(2)"
                class="rounded-0 pa-5 border-b"
                flat
                @click=""
              >
                <v-row>
                  <v-col cols="6">{{ new Date().toDateString() }}</v-col>
                  <v-col
                    cols="2"
                    class="text-center d-flex justify-center font-weight-bold text-grey-darken-3 align-center"
                    >{{ new Date().toLocaleTimeString() }}</v-col
                  ><v-col
                    cols="2"
                    class="text-center d-flex justify-center font-weight-bold text-grey-darken-3 align-center"
                    >{{ new Date().toLocaleTimeString() }}</v-col
                  ><v-col
                    cols="2"
                    class="text-center d-flex justify-center font-weight-bold text-grey-darken-3 align-center"
                    >{{ "5hr" }}</v-col
                  >
                </v-row>
              </v-card>
            </div>
            <div class="d-flex w-100 my-5">
              <v-spacer></v-spacer>
              <v-pagination length="5"></v-pagination>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { students } = storeToRefs(useStudentStore());
const student = computed(() =>
  students.value.find((item) => item.id == parseInt(route.params.student_id.toString()))
);
</script>

<style scoped></style>
