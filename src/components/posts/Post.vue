<template>
  <div class="post">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <PostFeed @update="getPost" :post="postData" :showAction=false />
          <CommentForm :postId="postData._id" @updata="getPost" />
          <CommentFeed v-for="comment in postData.comments" :comment="comment" :key="comment._id" :postId="postData._id" @updata="getPost"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm";
import PostFeed from "./PostFeed";
import CommentFeed from "./CommentFeed";
export default {
  data() {
    return {
      postData: {
      }
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.axios
        .get(`/api/posts/${this.$route.params.id}`)
        .then(res => {
          this.postData = res.data;
          console.log(res.data);
          //console.log(this.postData.comments);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  },
  components: {
    CommentForm,PostFeed,CommentFeed
  }
};
</script>

<style></style>
