<template>
    <span>
        <nuxt-child/>
        <ArticleMosaic :key="post._id" v-for="post of posts" :post="post"/>
    </span>
</template>

<script>
import ArticleMosaic from '@/components/mosaic/articleMosaic';

export default {
  name: 'home',
  components: { ArticleMosaic },
  props: {},
  data() {
      return {
        posts: null,
        loading: true,
        errored: false
      }
  },
  mounted() {
    if(this.debugger) {
        return;
    }

    fetch('https://crp-api.herokuapp.com/api')
      .then(response => response.json())
      .then(response => (this.posts = response))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
  }
}
</script>

<style scoped>
span {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 10px 0px;
}
</style>
