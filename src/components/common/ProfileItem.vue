<template>
  <div class="card card-body bg-light mb-3">
    <div class="row">
      <div class="col-2">
        <img
          class="rounded-circle"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt=""
        />
      </div>
      <div class="col-lg-6 col-md-4 col-8">
        <h3>{{ ProfileItem.user.name }}</h3>
        <p>{{ ProfileItem.status }}</p>
        <p>{{ ProfileItem.location }}</p>
        <router-link :to="{name:'Profile',params:{handle:ProfileItem.handle}}" class="btn btn-info">更多信息</router-link>
      </div>
      <div class="col-md-4 d-none d-lg-block">
        <h4>技能</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(skill, index) in ProfileItem.skills"
            :key="index"
          >
            <i class="fa fa-check pr-1"></i>{{skill}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ProfileItem: Object
  }
};
</script>

<style></style>
