<template>
  <b-jumbotron :header="header" :lead="lead">
    <p>{{ desc }}</p>
    <b-button v-if="btn" variant="primary" :to="link">{{ btn }}</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["header", "lead", "desc", "btn", "link"],
};
</script>

<style>
</style>
    <!-- header="STUDENT MANAGER" -->
