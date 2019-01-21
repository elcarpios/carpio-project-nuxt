<template>
    <span>
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
    return {}
  },
  asyncData({ payload, store }) {
    if (payload) {
       return store.commit('setPosts', payload);
    }

    return store.state.posts;
  },
  computed: {
    posts () {
      return this.$store.state.posts;
    }
  },
  mounted() {
    if(this.debugger) {
      return;
    }
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
