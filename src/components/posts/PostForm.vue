<template>
  <div class="post-form mb-3">
    <div class="card card-info">
      <div class="card-header bg-info text-white">
        Say Somthing...
      </div>
      <div class="card-body">
        <form @submit.prevent="submit">
          <div class="form-group">
            <TextArea
              name="text"
              placeholder="留言"
              v-model="text"
              :error="errors.text"
            />
          </div>
          <button type="submit" class="btn btn-dark">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "../common/TextAreaGroup";
export default {
  name: "PostForm",
  data() {
    return {
      text: "",
      errors: {}
    };
  },
  methods: {
    submit() {
      const user = this.$store.getters.user;
      const newPost = {
        text: this.text,
        name: user.name,
        avatar: user.avater ? user.avater : ""
      };
      this.axios
        .post("/api/posts", newPost)
        .then(res => {
          this.errors = {};
          this.text="";
          console.log(res.data);
          this.$emit("update");
        })
        .catch(err => {
          this.errors = err.response.data;
          console.log(err.response);
        });
      console.log(this.text);
    }
  },
  components: {
    TextArea
  }
};
</script>

<style></style>
