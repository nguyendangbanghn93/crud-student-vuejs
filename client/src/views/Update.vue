<template>
  <div>
    <Jumbotron header="UPDATE STUDENT" :lead="student.fullname" btn="Back" link="/Students"/>
    <b-container>
      <StudentForm :formData="student"/>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Jumbotron from "../components/common/Jumbotron";
import StudentForm from "../components/common/StudentForm.vue";
export default {
  components: { Jumbotron, StudentForm },
  computed: {
    ...mapGetters(["students"]),
    student() {
      return this.students.find((s) => s._id === this.$route.params.studentId);
    },
  },
};
</script>

<style>
</style>