<template>
  <article class="article-mosaic">
    <div class="metadetails">
      <span class="mosaic-author">{{ post.author }}</span>
      <time class="mosaic-date" :datetime="post.date">
        {{ new Date(post.date).toLocaleString('es-ES',{ year: 'numeric', month: 'long', day: 'numeric' }) }}
      </time>
    </div>
    <nuxt-link :to="{ path: `/post/${post._id}/`, params: { id: post._id, post } }">
      <div
      class ="img"
      :style="`background-image: url(\'/_nuxt/static/images/${post.media}\');`">
      </div>
    </nuxt-link>
    <div class="mosaic-subtitle">{{ post.subtitle }}</div>
    <nuxt-link :to="{ path: `post/${post._id}`, params: { id: post._id, post } }">
      <p class="mosaic-title">{{ post.title }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'Article',
  components: {},
  props: [ 'post' ]
};
</script>

<style scoped>
article {
  width: 100%;
  margin-top: 10px;
  padding: 0 2%;
  padding-bottom: 20px;
}

div.metadetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px 10px;
}

span.mosaic-author {
  font-size: 14px;
  padding-left: 5px;
  border-left: 3px solid red;
  margin-left: 2px;
  font-style: italic;
}

time.mosaic-date {
  font-size: 12px;
  margin-right: 1px;
  font-weight: bolder;
}

div.img {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

div.mosaic-subtitle {
  display: inline-block;
  margin: 10px 0 0 2px;
  font-size: 16px;
  padding: 6px 8px;
  background-color: #4dc0b5;
  color: white;
}

p.mosaic-title {
  margin: 6px 4px 0 4px;
  font-size: 18px;
  text-align: justify;
  line-height: 26px;
  font-weight: bold;
}

@media only screen and (min-width: 641px) and (max-width: 1199px) {
  article {
    padding: 0% 2%;
    width: 46%;
  }
}

@media only screen and (min-width: 1200px) {
  article {
    width: 30%;
  }
}
</style>
