<template>
  <div class="posts">
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-2">
          <a href="profile.html">
            <img
              style="width:150px"
              class="rounded-circle d-none d-md-block"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
          </a>
          <br />
          <p class="text-center">{{ post.name }}</p>
        </div>
        <div class="col-md-10">
          <p class="lead">
            {{ post.text }}
          </p>
          <div v-if="showAction">
            <button
              type="button"
              class="btn btn-light mr-1"
              @click.prevent="likeClick(post._id)"
            >
              <i class="text-info fas fa-thumbs-up"></i>
              <span class="badge badge-light">{{ post.likes.length }}</span>
            </button>
            <button
              type="button"
              class="btn btn-light mr-1"
              @click.prevent="unlikeClick(post._id)"
            >
              <i class="text-secondary fas fa-thumbs-down"></i>
            </button>
            <router-link :to="`/post/${post._id}`" class="btn btn-info mr-1">
              留言
            </router-link>
            <button
              v-if="user != null && user.id == post.user"
              type="button"
              class="btn btn-danger mr-1"
              @click.prevent="deleteClick(post._id)"
            >
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    showAction: Boolean
  },
  methods: {
    deleteClick(id) {
      this.axios
        .delete(`/api/posts/${id}`)
        .then(res => {
          //console.log(res.data);
          this.$emit("update");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    likeClick(id) {
      this.axios
        .post(`/api/posts/like/${id}`)
        .then(res => {
          this.$emit("update");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    unlikeClick(id) {
      this.axios
        .post(`/api/posts/unlike/${id}`)
        .then(res => {
          this.$emit("update");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style></style>
