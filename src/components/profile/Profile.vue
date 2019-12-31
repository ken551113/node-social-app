<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-6">
              <a class="btn btn-light mb-3 float-left" @click="$router.go(-1)"
                >返回</a
              >
            </div>
            <div class="col-6"></div>
          </div>
          <ProfileHeader v-if="profile" :profile="profile" />
          <ProfileAbout v-if="profile" :profile="profile" />
          <ProfileCreds
            v-if="profile && (profile.experience || profile.education)"
            :experience="profile.experience"
            :education="profile.education"
          />
          <ProfileGithub
            v-if="profile && profile.githubusername"
            :username="profile.githubusername"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";

export default {
  data() {
    return {
      profile: null
    };
  },
  methods: {
    getProfileByHandle(handle) {
      this.axios
        .get(`/api/profile/handle/${handle}`)
        .then(res => {
          this.profile = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getProfileByHandle(to.params.handle);
    });
  },
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileCreds,
    ProfileGithub
  }
};
</script>

<style></style>
