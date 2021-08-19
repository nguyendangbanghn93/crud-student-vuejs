<template>
  <div v-if="student">
    <Jumbotron header="Detail" btn="Back" link="/Students" />
    <b-container
      ><b-card class="mt-3" :header="'Student: ' + student.fullname">
        <div>Fullname: {{ student.fullname }}</div>
        <div>Birthday: {{ iDate(student.birthday, "{j}/{n}/{f}") }}</div>
        <div>Email: {{ student.email }}</div>
        <div>Phone number: {{ student.phoneNumber }}</div>
      </b-card></b-container
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Jumbotron from "../components/common/Jumbotron";
import { iDate } from "../utils";
export default {
  components: { Jumbotron },
  computed: {
    ...mapGetters(["students"]),
    student() {
      return this.students.find((s) => s._id === this.$route.params.studentId);
    },
  },
  methods: {
    iDate,
  },
};
</script>

<style>
</style>