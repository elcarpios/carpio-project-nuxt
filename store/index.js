export const state = () => ({
  posts: [],
  singlePost: {}
});

export const actions = {
  fetchAllPosts ({commit}) {
    return this.$axios.$get('api').then(posts => commit('setPosts', posts));
  },

  fetchPost ({ commit, state }, id) {
    const storedPost = state.posts.filter(post => post._id === id),
      isAlreadyInCache = storedPost.length,
      headers = { deeplinking: !isAlreadyInCache };
    if (isAlreadyInCache) {
      commit('setPost', storedPost[0]);
      return this.$axios.$get(`api/posts/${id}`, { headers })
      .then(lazyContent => { 
        commit('mergeLazy', lazyContent[0]);
      });
    } else {
      return this.$axios.$get(`api/posts/${id}`, { headers })
        .then(post => {
          commit('setPost', post[0])
      });
    }
  }
}

export const mutations = {
  setPost (state, post) {
    state.singlePost = post;
  },
  mergeLazy (state, lazyContent) {
    Object.assign(state.singlePost, lazyContent)
  },
  setPosts (state, posts) {
    state.posts = posts;
  }
}
