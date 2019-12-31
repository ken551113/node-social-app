<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Sign Up</h1>
          <p class="lead text-center">Create your DevConnector account</p>
          <form @submit.prevent="submit" autocomplete="off">
            <TextField
              type="text"
              placeholder="Name"
              name="name"
              v-model="newUser.name"
              :error="errors.name"
            />
            <TextField
              type="email"
              placeholder="Email"
              name="email"
              v-model="newUser.email"
              :error="errors.email"
              info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
            />
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              v-model="newUser.password"
              :error="errors.password"
            />
            <TextField
              type="password"
              placeholder="Confirm Password"
              name="password2"
              v-model="newUser.password2"
              :error="errors.password2"
            />
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
  name: "Register",
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    submit() {
      // console.log(this.$store.getters.isAuthenticated);
      //console.log(this.newUser.name);
      this.axios
        .post("/api/users/register", this.newUser)
        .then(res => {
          // console.log(res.data);
          this.errors = {};
          this.$store.commit("setUser", res.data);
          this.$router.push("/login");
        })
        .catch(err => {
          this.errors = err.response.data;
          console.log(this.errors);
        });
    }
  },
  components: {
    TextField
  }
};
</script>

<style></style>
