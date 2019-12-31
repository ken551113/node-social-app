<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4">Dashboard</h1>
          <p v-if="user !== null" class="lead text-muted">{{ user.name }}</p>
          <div v-if="profile !== null">
            <ProfileActived />
            <Experience :Experience="profile.experience" @deletExperience="deletExperience"/>
            <Education :Education ="profile.education" @deletEducation ="deletEducation"/>
            <div>
              <button class="btn btn-danger" @click.prevent="deletClick">
                删除
              </button>
            </div>
          </div>
          <div v-else>
            <p>沒有任何信息，請添加個人信息</p>
            <router-link class="btn btn-lg btn-info" to="/create-profile"
              >註冊</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileActived from "./common/ProfileActived";
import Experience from "./common/Experience";
import Education from "./common/Education";
export default {
  data() {
    return {
      profile: null
    };
  },
  methods: {
    getProfileData() {
      this.axios
        .get("/api/profile")
        .then(res => {
          console.log(res.data);
          this.profile = res.data;
          this.$store.dispatch("setProfile", res.data);
        })
        .catch(err => {
          console.log(err.response);
          this.profile = null;
          this.$store.dispatch("setProfile", null);
        });
    },
    deletClick() {
      this.axios
        .delete("/api/profile")
        .then(res => {
          this.profile = null;
          this.$store.dispatch("clearCurrentState");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    },
    deletExperience(id) {
      this.axios
        .delete(`/api/profile/experience/${id}`)
        .then(res => {
          this.profile = res.data;
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    deletEducation(id){
      this.axios.delete(`/api/profile/education/${id}`).then(res => {
        this.profile = res.data;
      }).catch(err=>{
        console.log(err.response);
      })
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.getProfileData();
  },
  //不知道為什麼影片裡面是不會再created一次，但我這邊會created一次，所以不需要用beforeRouteEnter這個方法
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getProfileData();
  //   });
  // },
  components: {
    ProfileActived,
    Experience,
    Education
  }
};
</script>

<style></style>
