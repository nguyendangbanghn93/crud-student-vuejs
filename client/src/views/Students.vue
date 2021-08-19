<template>
  <div>
    <Jumbotron
      header="LIST STUDENT"
      lead="Manager student"
      btn="Add student"
      link="/students/create"
    />
    <b-container>
      <b-table
        :items="students | reverse"
        :fields="fields"
        striped
        responsive="sm"
        head-variant=""
      >
        <template #cell(STT)="row">
          {{ row.index + 1 }}
        </template>
        <template #cell(birthday)="row">
          {{ iDate(row.item.birthday, "{j}/{n}/{f}") }}
        </template>
        <template #cell(actions)="row">
          <b-button
            :to="`/students/detail/${row.item._id}`"
            size="sm"
            class="mr-2"
            variant="outline-success"
            >Detaill</b-button
          >
          <b-button
            :to="`/students/update/${row.item._id}`"
            size="sm"
            class="mr-2"
            variant="outline-warning"
          >
            Edit
          </b-button>

          <b-button
            size="sm"
            @click="deleteHandler(row.item)"
            class="mr-2"
            variant="outline-secondary"
          >
            Delete
          </b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { mapState } from "vuex";
import Jumbotron from "../components/common/Jumbotron";
import { iDate } from "../utils";
export default {
  components: { Jumbotron },
  data() {
    return { bang: "Nguyễn Đăng Bằng" };
  },
  computed: {
    students() {
      return this.$store.state.student.students;
    },
    fields() {
      return [
        { key: "STT", sortable: false },
        { key: "fullname", sortable: true },
        { key: "birthday", sortable: true },
        { key: "email", sortable: true },
        { key: "phoneNumber", sortable: true },
        { key: "actions", sortable: false },
      ];
    },
  },
  methods: {
    iDate,
    ...mapActions(["deleteStudent"]),
    deleteHandler(student) {
      if (
        confirm(
          "Bạn có chắc chắn muốn xóa sinh viên " + student.fullname + " ?"
        )
      )
        this.deleteStudent(student._id);
    },
  },
  filters: {
    reverse(arr) {
      return [...arr].reverse();
    },
  },
};
</script>

<style>
</style>