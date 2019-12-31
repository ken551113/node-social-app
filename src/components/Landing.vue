<template>
  <div>
    <router-link v-show="!isLogin" class="btn btn-primary" to="/login"
      >登入</router-link
    >
    <router-link v-show="!isLogin" class="btn btn-secondary" to="/register"
      >註冊</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      if (this.$store.getters.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style></style>
