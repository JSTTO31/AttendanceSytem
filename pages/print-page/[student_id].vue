<template>
  <div class="id" v-if="student">
    <div style="width: 5.5cm">
      <img src="/images/1.png" style="width: 100%" alt="" />
    </div>
    <div style="width: 5.5cm">
      <img src="/images/2.png" style="width: 100%" alt="" />
    </div>
    <span class="font-weight-bold text-white name text-capitalize">{{
      student.name
    }}</span>
    <span class="font-weight-bold text-white course">BSCS</span>
    <v-avatar
      style="border-color: black !important"
      class="border-md image bg-grey"
      size="129"
    >
      <v-img :src="student.image"></v-img>
    </v-avatar>
    <div id="qrcode">
      <img id="qrcode-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import QRcode from "qrcode";
const $student = useStudentStore();
const { students } = storeToRefs(useStudentStore());
const route = useRoute();
const url = ref("");
const student = computed(() =>
  students.value.find((item) => item.id == parseInt(route.params.student_id.toString()))
);
$student.getAll();

onMounted(() => {
  QRcode.toDataURL("Hell world!").then((response: any) => {
    const image = document.getElementById("qrcode-image");
    if (image) {
      //@ts-ignore
      image.src = response;
    }
  });
});

// window.addEventListener("afterprint", () => {
//   const router = useRouter();
//   router.push({ name: "attendance-management" });
// });
</script>

<style scoped>
.id {
  width: 11.1cm; /* Set the desired width */
  height: 9.5cm;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-inline: auto;
}
.name {
  position: absolute;
  top: 59%;
  left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 25px;

  text-decoration: underline;
  transform-origin: center;
}

.course {
  position: absolute;
  top: 71.5%;
  left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 25px;

  text-decoration: underline;
  transform-origin: center;
}

.image {
  position: absolute;
  top: 14.8%;
  left: 9.64%;
}

#qrcode {
  position: absolute;
}
</style>
