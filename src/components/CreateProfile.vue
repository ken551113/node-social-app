<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click="$router.go(-1)">
            返回
          </a>
          <h1 class="display-4 text-center">创建个人信息</h1>
          <p class="lead text-center">
            写一些有关于你的个人信息
          </p>
          <small class="d-block pb-3">* = 必填</small>
          <form @submit.prevent="submit">
            <TextField
              type="text"
              name="handle"
              placeholder="* Profile handle"
              v-model="msgInfo.handle"
              :error="errors.handle"
              info="此處是後端接口用來查詢你的訊息，通常是寫你的email"
            />
            <SelectList
              name="status"
              v-model="msgInfo.status"
              :error="errors.status"
              :options="options"
              info="請告知我們您所從事的職業"
            />
            <TextField
              type="text"
              name="company"
              placeholder="公司"
              v-model="msgInfo.company"
              :error="errors.company"
              info="請輸入你現在任職的公司"
            />
            <TextField
              type="text"
              name="website"
              placeholder="網址"
              v-model="msgInfo.website"
              :error="errors.website"
              info="請輸入你的個人網站"
            />
            <TextField
              type="text"
              name="location"
              placeholder="位置"
              v-model="msgInfo.location"
              :error="errors.location"
              info="請輸入你所在的位置"
            />
            <TextField
              type="text"
              name="skills"
              placeholder="技能"
              v-model="msgInfo.skills"
              :error="errors.skills"
              info="請輸入你的技能(HTML,CSS,JavaScript,PHP)"
            />
            <TextField
              type="text"
              name="githubusername"
              placeholder="Github帳號"
              v-model="msgInfo.githubusername"
              :error="errors.githubusername"
              info="請輸入你的技能(HTML,CSS,JavaScript,PHP)"
            />
            <TextArea
              name="bio"
              placeholder="個人介紹"
              info="個人介紹"
              v-model="msgInfo.bio"
              :error="errors.bio"
            />
            <div class="mb-3">
              <button
                type="button"
                class="btn btn-light"
                @click="displaySocialInputs = !displaySocialInputs"
              >
                添加社群帳號
              </button>
              <span class="text-muted">選項</span>
            </div>
            <div v-if="displaySocialInputs">
              <InputGroup
                name="facebook"
                placeholder="facebook"
                :error="errors.facebook"
                icon="fa fa-facebook-square"
                v-model="msgInfo.facebook"
              />
              <InputGroup
                name="instagram"
                placeholder="instagram"
                :error="errors.instagram"
                icon="fa fa-instagram"
                v-model="msgInfo.instagram"
              />
              <InputGroup
                name="linkedin"
                placeholder="linkedin"
                :error="errors.linkedin"
                icon="fa fa-linkedin"
                v-model="msgInfo.linkedin"
              />
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
import TextArea from "./common/TextAreaGroup";
import SelectList from "./common/SelectListGroup";
import InputGroup from "./common/InputGroup";

export default {
  data() {
    return {
      msgInfo: {
        handle: "",
        company: "",
        website: "",
        location: "",
        skills: "",
        githubusername: "",
        bio: "",
        status: "選擇你的職業",
        facebook: "",
        instagram: "",
        linkedin: ""
      },
      errors: {},
      displaySocialInputs: false,
      options: [
        { label: "Other", value: "選擇你的職業" },
        { label: "Backend Developer", value: "後端工程師" },
        { label: "Senior Developer", value: "資深前端工程師" },
        { label: "Junior Developer", value: "初階前端工程師" },
        { label: "Manager", value: "前端管理" },
        { label: "Student or Learning", value: "學生" },
        { label: "Python machine learning", value: "后端开发" },
        { label: "Other", value: "其他" }
      ]
    };
  },
  methods: {
    submit() {
      this.axios
        .post("/api/profile", this.msgInfo)
        .then(res => {
          this.errors = {};
          this.$store.dispatch("setProfile", res.data);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.errors = err.response.data;
        });
    }
  },
  components: {
    TextField,
    TextArea,
    SelectList,
    InputGroup
  }
};
</script>

<style></style>
