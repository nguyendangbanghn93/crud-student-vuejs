<template>
  <div>
    <b-navbar
      class="container-fluid"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand to="/">STUDENT MANAGER</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/students">List Student</b-nav-item>
          <b-nav-item to="/students/create">Create Student</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>