<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Fullname" label-for="fullname">
        <b-form-input
          id="fullname"
          v-model="form.fullname"
          type="text"
          placeholder="Fullname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Birthday" label-for="birthday">
        <b-form-input
          id="birthday"
          v-model="form.birthday"
          type="date"
          placeholder="Birthday"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Phone Number" label-for="phoneNumber">
        <b-form-input
          id="phoneNumber"
          v-model="form.phoneNumber"
          type="text"
          placeholder="Phone Number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="mx-3">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { iDate } from "../../utils";
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({}),
      validate: (val) => {
        return (
          typeof val === "object" &&
          JSON.stringify(val.constructor()) == "{}" &&
          Object.keys(val).length > 0
        );
      },
    },
  },
  data() {
    return {
      form: {
        fullname: this.formData.fullname,
        birthday: this.formData.birthday
          ? iDate(this.formData.birthday, "{f}-{n}-{j}")
          : "",
        email: this.formData.email,
        phoneNumber: this.formData.phoneNumber,
      },
    };
  },
  computed: {
    isUpdate() {
      return Object.keys(this.formData).length > 0;
    },
  },
  methods: {
    ...mapActions(["createStudent", "updateStudent"]),

    onSubmit(event) {
      event.preventDefault();
      if (this.isUpdate) {
        //là sửa
        const student = { ...this.form, _id: this.formData._id };
        this.updateStudent(student);
      } else {
        //là tạo mới
        this.createStudent(this.form);
      }
      this.$router.push("/students");
    },
    onReset(event) {
      event.preventDefault();
      this.form = {};
    },
  },
};
</script>