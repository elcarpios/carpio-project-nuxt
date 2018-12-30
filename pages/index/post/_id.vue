<template>
    <article class="article-details">
        <nuxt-link class="go-back" :to="{ name: 'index' }">
            <span>X</span>
        </nuxt-link>
        <img
        class="details-media"
        :src="post.media || articleDetails.media"
        >
        <div class="details-content">
            <div class="metadetails">
                <span class="details-author">{{ post.author || articleDetails.author }}</span>
                <time class="details-date" :datetime="post.date || articleDetails.date">
                    {{ new Date(post.date || articleDetails.date).toLocaleString('es-ES',{ year: 'numeric', month: 'long', day: 'numeric' }) }}
                </time>
            </div>
            <div v-html="post.title || articleDetails.title" class="details-title"></div>
            <div v-html="post.excerpt || articleDetails.excerpt" class="details-excerpt"></div>
        </div>
    </article>
</template>

<script>
const getPostIdFromUrl = () => {
    const pathName = window.location.pathname.split('/');

    return pathName[pathName.length - 1];
};

export default {
  name: 'articleDetails',
  components: {},
  props: {
      post: {
          default: () => ({}),
          type: Object
      },
      debugger: Boolean
  },
  data() {
      return {
        articleDetails: {},
        loading: true,
        errored: false
      }
  },
  mounted() {
    if(this.debugger) {
        return;
    }

    const postId = this.post._id || getPostIdFromUrl(),
        headers = { deeplinking: !this.post._id };

    fetch('https://crp-api.herokuapp.com/api/posts/' + postId, { headers })
      .then(response => response.json())
      .then(response => (this.articleDetails = response[0]))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
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
}

div.metadetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0px 10px;
}

span.details-author {
    font-size: 14px;
    padding-left: 5px;
    border-left: 3px solid red;
    margin-left: 2px;
    font-style: italic;
}

time.details-date {
    font-size: 12px;
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

.details-excerpt {
    line-height: 1.445;
}
</style>
