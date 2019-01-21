export const state = () => ({
  posts: [],
  singlePost: {}
});

export const actions = {

}

export const mutations = {
  setPost (state, post) {
    state.singlePost = post;
  },
  setPosts (state, posts) {
    state.posts = posts;
  }
}
