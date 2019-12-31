<template>
  <div class="commentFeed" v-if="comment" >
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
          <p class="text-center">{{ comment.name }}</p>
        </div>
        <div class="col-md-10">
          <p class="lead">
            {{ comment.text }}
          </p>
            <button
              v-if="user != null && user.id == comment.user"
              type="button"
              class="btn btn-danger mr-1"
              @click.prevent="deleteClick(comment._id)"
            >
              <i class="fas fa-times" />
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
    postId: String,
  },
  methods: {
    deleteClick(id) {
      this.axios
        .delete(`/api/posts/comment/${this.postId}/${id}`)
        .then(res => {
          //console.log(res.data);
          this.$emit("updata");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style></style>
