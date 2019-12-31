<template>
  <div class="section add-experience">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <router-link to="/dashboard" class="btn btn-light">
            返回
          </router-link>
          <h1 class="display-4 text-center">工作經驗</h1>
          <p class="lead text-center">
            有關的工作經驗
          </p>
          <small class="d-block pb-3">* = 必填</small>
          <form @submit.prevent="submit">
            <TextField
              type="text"
              name="title"
              placeholder="* 工作職位"
              v-model="msgInfo.title"
              :error="errors.title"
            />
            <TextField
              type="text"
              name="company"
              placeholder="* 公司"
              v-model="msgInfo.company"
              :error="errors.company"
            />
            <TextField
              type="text"
              name="location"
              placeholder="地區"
              v-model="msgInfo.location"
              :error="errors.location"
            />
            <h6>開始時間</h6>
            <TextField
              type="date"
              name="from"
              v-model="msgInfo.from"
              :error="errors.from"
            />
            <h6>結束時間</h6>
            <TextField
              type="date"
              name="to"
              v-model="msgInfo.to"
              :error="errors.to"
              :disabled="msgInfo.current"
            />
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                name="current"
                v-model="msgInfo.current"
                id="current"
              />
              <label class="form-check-label" for="current">
                至今
              </label>
            </div>
            <TextArea
              name="description"
              placeholder="工作内容"
              v-model="msgInfo.description"
              :error="errors.description"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "./common/TextAreaGroup";
import TextField from "./common/TextFieldGroup";

export default {
  data() {
    return {
      msgInfo: {
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        description: "",
        current: false
      },
      errors: {}
    };
  },
  methods: {
    submit() {
      this.axios
        .post("/api/profile/experience", this.msgInfo)
        .then(res => {
          console.log(this.msgInfo);
          this.errors = {};
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.errors = err.response.data;
          console.log(this.errors);
        });
      console.log("submit");
    }
  },
  components: {
    TextField,
    TextArea
  }
};
</script>

<style></style>
