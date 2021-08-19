<template>
  <div>
    <Jumbotron header="ADD STUDENT" btn="Back" link="/Students" />
    <b-container>
      <StudentForm />
    </b-container>
  </div>
</template>

<script>
import Jumbotron from "../components/common/Jumbotron";
import StudentForm from "../components/common/StudentForm.vue";
export default {
  components: { Jumbotron, StudentForm },
};
</script>

<style>
.df {
  display: flex;
}
</style>