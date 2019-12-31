<template>
  <div class="add-education">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a href="dashboard.html" class="btn btn-light">
            返回
          </a>
          <h1 class="display-4 text-center">添加學歷</h1>
          <p class="lead text-center">
            有關於你的學歷...
          </p>
          <small class="d-block pb-3">* = 必填</small>
          <form @submit.prevent="submit">
            <TextField
              type="text"
              name="school"
              placeholder="* 學校"
              v-model="msgInfo.school"
              :error="errors.school"
            />
            <TextField
              type="text"
              name="degree"
              placeholder="* 學歷或證書"
              v-model="msgInfo.degree"
              :error="errors.degree"
            />
            <TextField
              type="text"
              name="fieldofstudy"
              placeholder="* 專業"
              v-model="msgInfo.fieldofstudy"
              :error="errors.fieldofstudy"
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
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "./common/TextFieldGroup";

export default {
  data() {
    return {
      msgInfo: {
        school: "",
        degree: "",
        fieldofstudy: "",
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
        .post("/api/profile/education", this.msgInfo)
        .then(res => {
          console.log(this.msgInfo);
          this.errors = {};
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.errors = err.response.data;
        });
    }
  },
  components: {
    TextField
  }
};
</script>

<style></style>
