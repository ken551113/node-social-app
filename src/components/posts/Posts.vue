<template>
  <div class="feed">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <PostForm @update="getPosts"/>
          <PostFeed @update="getPosts" v-for="post in posts" :key="post._id" :post="post" :showAction=true />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.axios
        .get("/api/posts")
        .then(res => {
          this.posts = res.data;
          console.log(this.posts);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  components: {
    PostForm,
    PostFeed
  }
};
</script>

<style></style>
