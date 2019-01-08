<template>
    <article class="article-details">
        <nuxt-link class="go-back" :to="{ name: 'index' }">
            <span>X</span>
        </nuxt-link>
        <img
        class="details-media"
        :src="post.media"
        >
        <div class="details-content">
            <div class="metadetails">
                <span class="details-author">{{ post.author }}</span>
                <time class="details-date" :datetime="post.date">
                    {{ new Date(post.date).toLocaleString('es-ES',{ year: 'numeric', month: 'long', day: 'numeric' }) }}
                </time>
            </div>
            <div v-html="post.title" class="details-title"/>
            <ul class="details-categories">
              <li> {{ post.subtitle }}</li>
            </ul>
            <div v-html="post.excerpt" class="details-excerpt"/>
            <ul v-if="post.categories && post.categories.length > 0" class="details-categories">
              <li :key="index"  v-for="(category, index) in post.categories"> {{ category }}</li>
            </ul>
        </div>
        <Footer/>
    </article>
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
      return {}
  },
  fetch({ store, route, params }) {
    const getPostIdFromUrl = () => {
      const pathName = route.path.split('/');

      return pathName[pathName.length - 1];
    };

    const postId = params.id || getPostIdFromUrl();
    return store.dispatch("fetchPost", postId);
  },
  computed: {
    post () {
      return this.$store.state.singlePost;
    }
  },
  methods: {}
};
</script>

<style scoped>
article {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 2%;
    background-color: white;
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
