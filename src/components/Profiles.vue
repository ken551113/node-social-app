<template>
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">工程師資訊</h1>
          <p class="lead text-center">更多信息</p>
          <ProfileItem
            v-for="ProfileItem in Profiles"
            :key="ProfileItem._id"
            :ProfileItem="ProfileItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileItem from "./common/ProfileItem";
export default {
  data() {
    return {
      Profiles: []
    };
  },
  created() {
    this.getProfiles();
  },
  methods: {
    getProfiles() {
      this.axios
        .get("/api/profile/all")
        .then(res => {
          this.Profiles = res.data;
          this.$store.dispatch("setProfiles", res.data);
          console.log(this.Profiles);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  components: {
    ProfileItem
  }
};
</script>

<style></style>
