<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jwt_decode from "jwt-decode";
import Loading from "@/components/common/Loading.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  created() {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decode = jwt_decode(token);

      const currentTime = Date.now() / 1000;

      if (decode.exp < currentTime) {
        // this.$store.commit("setIsAuthenticated", false);
        // this.$store.commit("setUser", {});
        this.$store.dispatch("clearCurrentState", {});
        this.$router.push("/login");
      } else {
        this.$store.commit("setIsAuthenticated", !this.isEmpty(decode));
        this.$store.commit("setUser", decode);
        // this.$router.push("/");
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
