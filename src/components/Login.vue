<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登入</h1>
          <p class="lead text-center">請輸入帳號密碼登入</p>
          <form @submit.prevent="submit">
            <TextField
              type="email"
              placeholder="email"
              name="email"
              v-model="user.email"
              :error="errors.email"
            />
            <TextField
              type="password"
              placeholder="password"
              name="password"
              v-model="user.password"
              :error="errors.password"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import TextField from "./common/TextFieldGroup";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    submit() {
      console.log(this.user);
      this.axios
        .post("/api/users/login", this.user)
        .then(res => {
          //console.log(res.data);
          this.errors = {};
          const { token } = res.data;
          window.localStorage.setItem("jwtToken", token);
          const decode = jwt_decode(token);
          this.$store.commit("setIsAuthenticated", !this.isEmpty(decode));
          this.$store.commit("setUser", decode);
          this.$router.push("/");
        })
        .catch(err => {
          this.errors = err.response.data;
          console.log(this.errors);
        });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
  components: {
    TextField
  }
};
</script>

<style>
.login {
  min-height: calc(100vh - 200px);
}
</style>
