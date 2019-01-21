<template>
  <span class="article-wrapper">
    <article class="article-details">
        <a v-if="isDeeplinking" class="go-back" target="_self" href="/">
            <span>X</span>
        </a>
        <nuxt-link v-if="!isDeeplinking" class="go-back" :to="{ path: '/' }">
            <span>X</span>
        </nuxt-link>
        <img
        class="details-media"
        :src="`/_nuxt/static/images/${post.media}`"
        >
        <div class="details-content">
            <div class="metadetails">
                <span class="details-author">{{ post.author }}</span>
                <time class="details-date" :datetime="post.date">
                    {{ new Date(post.date).toLocaleString('es-ES',{ year: 'numeric', month: 'long', day: 'numeric' }) }}
                </time>
            </div>
            <div v-html="post.title" class="details-title"/>
            <ul class="details-categories" v-if="post.categories">
              <li :key="index" v-for="(category, index) in post.categories"> {{ category }}</li>
            </ul>
            <div v-html="post.excerpt" class="details-excerpt"/>
        </div>
    </article>
    <Footer/>
  <span>
</template>

<script>
import Footer from "@/components/footer/";

export default {
  name: 'articleDetails',
  components: { Footer },
  props: {
      debugger: Boolean
  },
  data() {
      return {

      }
  },
  asyncData({ store, route, params, payload }) {
    if (payload) {
      return store.commit('setPost', payload);
    }

    const post = store.state.posts.filter(post => post._id === params.id)[0];

    return post ? store.commit('setPost', post) : {};
  },
  computed: {
    post() {
      return this.$store.state.singlePost;
    },
    isDeeplinking() {
      return this.$store.state.posts.length === 0;
    }
  },
  methods: {}
};
</script>

<style scoped>
span.article-wrapper {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}

article {
    background-color: white;
    flex-grow: 1;
}

.go-back {
    position: absolute;
    color: white;
    top: 15px;
    left: 25px;
    font-size: 25px;
}

div.details-content {
    padding: 5px 10px;
    margin-bottom: 15px;
}

div.metadetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;
    margin-bottom: 15px;
}

span.details-author {
    font-size: 16px;
    padding-left: 5px;
    border-left: 3px solid red;
    margin-left: 2px;
    font-style: italic;
}

time.details-date {
    font-size: 14px;
    margin-right: 1px;
    font-weight: bolder;
}

img.details-media {
    width: 100%;
    height: 220px;
}

.details-title {
    margin-bottom: 15px;
    font-size: 26px;
    line-height: 29px;
    font-weight: bold;
    text-align: justify;
    letter-spacing: 1px;
}

.details-categories li {
  display: inline-block;
  margin-right: 15px;
  background-color: #4dc0b5;
  color: white;
  padding: 4px 6px;
}

.details-excerpt {
    margin: 15px 0px;
    line-height: 1.58;
    letter-spacing: -.004em;
    font-size: 18px;
}

.details-footer {
  margin-top: 15px;
}

Footer {
  flex-shrink: 0;
}

</style>

<style>
p {
  margin-top: 14px;
  text-align: justify;
}
img.img-responsive {
  width: 100%;
  height: 100%;
  margin-top: 15px;
}
</style>
