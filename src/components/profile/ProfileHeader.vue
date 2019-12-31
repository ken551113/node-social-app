<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-body bg-info text-white mb-3">
        <div class="row">
          <div class="col-4 col-md-3 m-auto">
            <img
              class="rounded-circle"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
          </div>
        </div>
        <div class="text-center">
          <h1 class="display-4 text-center"  >{{profile.user.name}}</h1>
          <p class="lead text-center">{{profile.company}}</p>
          <p>{{profile.location}}</p>
          <p>
            <a class="text-white p-2" :href="`https://${profile.website}`">
              <i class="fas fa-globe fa-2x"></i>
            </a>
            <a class="text-white p-2" :href="profile.social.facebook">
              <i class="fa fa-facebook-square fa-2x"></i>
            </a>

            <a class="text-white p-2" :href="profile.social.linkedin">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a class="text-white p-2" :href="profile.social.instagram">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    profile:Object
  }
};
</script>

<style></style>
