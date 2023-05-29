<template>
  <v-dialog
    :model-value="showDialog"
    width="750"
    @click:outside="emits('update:showDialog', false)"
  >
    <v-card
      class="pa-5 border rounded-lg"
      flat
      id="vendor-information"
      :disabled="isLoading"
    >
      <h1>Create student</h1>
      <h4 class="mb-5 font-weight-regular">
        Create student by filling out the required information.
      </h4>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Student name</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start">
          <v-text-field
            v-model="$v.name.$model"
            :error-messages="useShowError($v.name)"
            prepend-inner-icon="mdi-account"
            label="input"
            variant="outlined"
            single-line
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Student email</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start">
          <v-text-field
            label="input"
            v-model="$v.email.$model"
            :error-messages="useShowError($v.email)"
            prepend-inner-icon="mdi-mail"
            variant="outlined"
            single-line
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Student gender</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start">
          <v-select
            label="Select"
            variant="outlined"
            single-line
            v-model="$v.gender.$model"
            :error-messages="useShowError($v.gender)"
            prepend-inner-icon="mdi-gender-male-female"
            :items="['male', 'female']"
            class="text-capitalize"
            density="compact"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Student phone number</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start">
          <v-text-field
            label="input"
            variant="outlined"
            single-line
            v-model="$v.phone_number.$model"
            :error-messages="useShowError($v.phone_number)"
            prepend-inner-icon="mdi-phone"
            type="number"
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Birthday</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start d-flex flex-column">
          <VueDatePicker
            v-model="$v.date_of_birth.$model"
            :format="format"
            :flow="flow"
          ></VueDatePicker>
          <span
            class="text-error text-caption mt-1 ml-4"
            v-if="$v.date_of_birth.$invalid"
            >{{ useShowError($v.date_of_birth) }}</span
          >
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <label for="">Address</label>
        </v-col>
        <v-col cols="9" class="d-flex justify-start">
          <v-textarea
            label="input"
            variant="outlined"
            single-line
            v-model="$v.address.$model"
            :error-messages="useShowError($v.address)"
            prepend-inner-icon="mdi-map-marker"
            type="number"
            rows="1"
            auto-grow
            density="compact"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn flat>clear</v-btn>
        </v-col>
        <v-col cols="9" class="d-flex justify-end">
          <v-btn class="ml-2" @click="emits('update:showDialog', false)" flat
            >Cancel</v-btn
          >
          <v-btn
            class="ml-2 text-white"
            color="#247881"
            @click="submit"
            :loading="isLoading"
            >Create</v-btn
          >
        </v-col>
      </v-row>

      <span style="position: absolute; top: 0; right: 0">
        <v-btn
          icon="mdi-close"
          class="ma-3"
          flat
          @click="emits('update:showDialog', false)"
        ></v-btn>
      </span>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const props = defineProps(["showDialog"]);
const emits = defineEmits(["update:showDialog"]);
const flow: any = ["year", "month", "calendar"];
const format = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `Selected date is ${day}/${month}/${year}`;
};
const isLoading = ref(false);
const student = reactive({
  name: "joshua sotto",
  email: "joshua@example.example",
  gender: "male",
  phone_number: "0923838",
  date_of_birth: "",
  address: "123 ABC Street, Barangay XYZ Manila, Metro Manila Philippines",
});

const rules = {
  name: { required },
  email: { required, email },
  gender: { required },
  phone_number: { required },
  date_of_birth: { required },
  address: { required },
};

const $v = useVuelidate(rules, student);

const submit = () => {
  if ($v.value.$invalid) {
    $v.value.$touch();
    return;
  }
  isLoading.value = true;
  const $student = useStudentStore();

  $student.create(student).then(() => {
    isLoading.value = false;
    emits("update:showDialog", false);
  });
};
</script>

<style scoped></style>
