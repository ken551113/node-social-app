<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light justify-content-between mb-4"
  >
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/profiles"> 工程師 </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-show="!isLogin">
          <router-link class="nav-link" to="/register">註冊</router-link>
        </li>
        <li class="nav-item" v-show="!isLogin">
          <router-link class="nav-link" to="/login">登入</router-link>
        </li>
        <li class="nav-item" v-show="isLogin">
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item" v-if="user !== null" v-show="isLogin">
          <a @click.prevent="logout" class="nav-link">退出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      //刪除ls token
      localStorage.removeItem("jwtToken");
      //刪除vuex請求頭
      //this.$store.dispatch("setIsAuthenticated", false);
      //this.$store.dispatch("setUser", {});
      this.$store.dispatch("clearCurrentState", {});
      //跳轉路由
      this.$router.push("/login");
    }
  },
  computed: {
    isLogin() {
      if (this.$store.getters.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    },
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style></style>
