<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>We are having problems</h1>
    <a target="_self" href="/">Home page</a>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
  .container {
    flex-grow: 1;
    overflow: auto;
    padding: 20px 10px;
    text-align: center;
  }

  a {
    display: block;
    margin-top: 50px;
  }
</style>
